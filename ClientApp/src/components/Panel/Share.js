import React from 'react';
import SingleInput from '../SingleInput/SingleInput';

export default class Share extends React.Component {
    render() {
        return (
          <div className={`${this.props.className}`}>
            <h3 className="text-capitalized">Share your food creations</h3>
            <SingleInput 
              actionUrl="/" 
              placeholder="Email address"
              label="Email"
              buttonText="Submit"
              onSearchRequest={(query) => {
                console.log(`Submit email: ${query}`);
              }}
            />
          </div>  
        );
    }
}
