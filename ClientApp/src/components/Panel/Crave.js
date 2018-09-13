import React from 'react';
import { connect } from 'react-redux';
import * as SearchStore from '../../store/Search';
import SearchInput from '../SearchInput/SearchInput';

class Crave extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(query) {
    this.props.setQueryParams(query);
  }

  render() {
    return (
      <div className={`${this.props.className}`}>
        <h3 className="text-capitalized">Search for you crave</h3>
        <SearchInput
          actionUrl=""
          placeholder="What you want?"
          label="search your crave"
          buttonText="Search"
          onSearchRequest={(query) => {
            console.log(`Search for : ${query}`);
            this.fetchData(query);
          }}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Crave);
