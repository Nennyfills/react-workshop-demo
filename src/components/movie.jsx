import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
class Movie extends Component {
  state = {};
  render() {
    return (
      <div className="col-xs-6  col-xs-4 col-md-3">
        <div className=" card mb-4">
          <img
            src={this.props.movie.Poster}
            alt=""
            className="card-img-top  p-0 imgM"
          />
          <div className="card-body">
            <div className="card-text">
              <h5>
                <strong>{this.props.movie.Title}</strong>
              </h5>
              <p>{this.props.movie.Year}</p>
              <p>{this.props.movie.imdbID}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
