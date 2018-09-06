import React from 'react';

export default class Share extends React.Component {
    render() {
        return (
          <div className={`${this.props.className}`}>
            <h3 className="text-capitalized">Share your food creations</h3>
          </div>  
        );
    }
}
