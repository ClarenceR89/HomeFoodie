import path from 'path';
import fs from 'fs';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createServerRenderer } from 'aspnet-prerendering';

import configureStore from '../src/store/configureStore';
import App from '../src/App';

export default createServerRenderer((params) => {
    return new Promise((res, rej) => {
        const context = {}
        const store = configureStore(null, JSON.parse(params.data));
        const markup = (
            <Provider store={store}>
                <StaticRouter
                    location={params.location.path}
                    context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        var app = renderToString(markup);
        var state = store.getState();

        if (context.url) {
            // Somewhere a `<Redirect>` was rendered
            res({ redirectUrl: context.url });
            return;
        }

        params.domainTasks.then(() => {
            app = renderToString(markup);
            state = store.getState();

            const filePath = path.resolve(__dirname, '..', 'public', 'index.html');
            fs.readFile(filePath, 'utf8', (err, htmlData) => {
                if (err) {
                    console.error('read err', err)
                    return rej('no file read')
                }
                const RenderedApp = htmlData
                    .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                    .replace('initialReduxState = {}', `initialReduxState=${JSON.stringify(state)}`)
                    .replace(/\%PUBLIC_URL\%/g, '')
                    .replace('</body>', '<script type="text/javascript" src="/static/js/bundle.js"></script>\n</body>');
                res({
                    html: RenderedApp,
                    globals: { initialReduxState: state }
                });
            });
        }, rej);
    });
});