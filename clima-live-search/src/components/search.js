import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
  }

  render() {
    return (
      <div className='container'>
        {/*Heading*/}
        <h2 className='heading'>Live Search: Weather App</h2>
        {/*Search Input*/}
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            value=''
            id='search-input'
            placeholder='Ciudad Origen...'
          />
        </label>
      </div>
    );
  }
}
export default Search;
