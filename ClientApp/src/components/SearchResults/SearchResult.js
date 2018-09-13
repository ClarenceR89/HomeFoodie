import React from 'react';
import { connect } from 'react-redux';
import * as SearchStore from '../../store/Search';
import queryString from 'query-string';
import FoodItem from "./FoodItem/FoodItem";

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        const values = queryString.parse(this.props.location.search);

        if (this.props.query !== values.query) {
            this.props.setQueryParams(values.query, false);
        }

        //kickoff redux search call
        this.props.requestFoodItems();
    }
    
    render() {
        return (
            <div className="col">
                {
                    this.props.isLoading ? <div>Loading...</div> :
                        this.props.foodItems.map((foodItem, i) => {
                            return <FoodItem key={i} {...foodItem} />
                        })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.search,
    };
};

const mapDispatchToProps = {
    ...SearchStore.actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);