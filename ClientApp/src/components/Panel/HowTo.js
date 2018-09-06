import React from 'react';

export default class HowTo extends React.Component {
    render() {
        return (
          <div className={`${this.props.className}`}>
            <h3 className="text-capitalized">How it works: 1-2-3</h3>
            <div className="col border border-dark">
                {/* TODO: Carousel */}
            </div>
          </div>  
        );
    }
}
