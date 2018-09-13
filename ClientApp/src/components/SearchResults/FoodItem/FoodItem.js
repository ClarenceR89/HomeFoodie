import React from "react";

export default class FoodItem extends React.Component {
    render() {
        return (
            <div className="bg-dark text-light row food-item my-2 py-3" id={this.props.id}
                style={{
                    backgroundImage: `url(${this.props.image})`,
                    backgroundSize: `cover`,
                    height: "300px"
                }}>
                {/* <div className="bg-dark food-image col-12">
                    {
                        this.props.image && this.props.image != ''
                            ? <img src={this.props.image} alt="" className="img-fluid rounded" style={{ minWidth: '100%' }} />
                            : ""
                    }
                </div> */}
                <div className="col-12">
                    <div className="col">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.city.name}</p>
                        <p><strong>Feeds: </strong>{this.props.feeds_count}</p>
                        <a href={`/meal/${this.props.id}`}>View</a>
                    </div>
                </div>
            </div>
        );
    }
}

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