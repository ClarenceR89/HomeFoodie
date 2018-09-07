import React from 'react';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        //decode uri params

        //kickoff redux search call
        
    }
    render() {
        return (
            <div>Search results</div>
        );
    }
}

export default connect()(SearchResult);