import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className={`${this.props.className || ''}`}>
                <h3>HomeFoodie: Who, What &amp; Why?</h3>
                <p>HomeFoodie is about food, we strive to connect like minded foodies,
                we find the closest foodies to you and allow you to order food from them.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia sunt doloribus, illum, ratione non quod perferendis consequuntur rem autem nihil adipisci quas culpa consequatur reiciendis laborum temporibus, aut molestiae.</p>
            </div>
        );
    }
}

