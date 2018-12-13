import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  setValue = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  submitForm = event => {
    console.log(event);
    this.props.submit(this.state.value);
    // for all default item on the browser you use event.preventDefault()
    event.preventDefault();
  };

  render() {
    return (
      <div className=" col-sm-12 col-lg-12">
        <form onSubmit={this.submitForm}>
          <h3>Search a few of our favorite movie</h3>
          <input
            className=" searchI rounded"
            placeholder="Search for a movie"
            onChange={this.setValue}
            value={this.state.value}
          />
          <button className=" btn btn-dark btn-lg rounded ">
            {this.props.getSearch}
          </button>
        </form>
        {/* {this.props.movies === undefined || this.props.movies.length === 0
          ? this.state.reply
          : this.state.value} */}
        {/* <h1>{this.state.reply}</h1> */}
        <h1>{this.props.movies}</h1>
      </div>
    );
  }
}

export default Search;
