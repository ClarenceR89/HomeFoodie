import React from 'react';

export default class SearchInput extends React.Component {
    query = '';
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.query = '';
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSearchRequest) {
            this.props.onSearchRequest(this.query);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        id="query"
                        name="query"
                        type="search" 
                        className="form-control" 
                        placeholder={this.props.placeholder} 
                        aria-label={this.props.label} 
                        aria-describedby="button-addon2"
                        onChange={(event) => {
                            this.query = event.target.value;
                        }}
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="submit" 
                            id="button-addon2"
                        >{this.props.buttonText}</button>
                    </div>
                </div>
            </form>
        );
    }
}
