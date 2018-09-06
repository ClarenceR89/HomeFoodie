require('ignore-styles');

require('babel-register')({
    ignore: [/(node_modules)/],
    presets: ['es2015', 'react-app']
});

const prerenderer = require('./index').default;

module.exports = prerenderer