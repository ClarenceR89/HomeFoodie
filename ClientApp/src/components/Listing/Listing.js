import React from 'react';
import { connect } from 'react-redux';
import * as ListingStore from '../../store/Listing';

class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.props.requestFoodListing(this.props.match.params.id);
    }
    render() {
        return (
            <div className="col">
                <div className="col py-3">
                    {
                        this.props.foodItem.image && this.props.foodItem.image !== ''
                            ? <img src={this.props.foodItem.image} alt="" className="img-fluid" />
                            : ''
                    }
                    <h4>{this.props.foodItem.title}</h4>
                    {
                        this.props.foodItem.city
                            ? <p>{this.props.foodItem.city.name}</p>
                            : ''
                    }
                    <p><strong>Price: </strong>{this.props.foodItem.price}</p>
                    <p>{this.props.foodItem.ingedients}</p>
                    <p>{this.props.foodItem.description}</p>
                    <a href={this.props.foodItem.link} className="btn btn-small btn-primary">View Recipe</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.listing,
    };
};

const mapDispatchToProps = {
    ...ListingStore.actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);

/* 
{
    "id":114,
    "title":"Salsa Chicken and Potato Packets",
    "feeds_count":1,
    "price":133,
    "city":{"id":3,"name":"Johannesburg"},
    "link":"http:\/\/allrecipes.com\/Recipe\/Salsa-Chicken-and-Potato-Packets\/Detail.aspx",
    "image":"",
    "ingredients":"chicken, potato, salsa",
    "description":"Alice cautiously replied: 'but I haven't been invited yet.' 'You'll see me there,' said the Hatter. Alice felt so desperate that she still held the pieces of mushroom in her hands, and she felt that.",
    "created_at":"2018-09-05 22:37:03",
    "updated_at":"2018-09-05 22:37:03"
}
*/