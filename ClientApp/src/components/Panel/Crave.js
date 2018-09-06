import React from 'react';

export default class Crave extends React.Component {
    render() {
        return (
          <div className={`${this.props.className}`}>
            <h3 className="text-capitalized">Search for you crave</h3>
          </div>  
        );
    }
}
