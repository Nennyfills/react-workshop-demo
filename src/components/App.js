import React, { Component } from "react";
import Header from "./header";
import Movie from "./movie";
import Search from "./search";
import "../App.css";
import spinner from "../ajax-loader.gif";
import "bootstrap/dist/css/bootstrap.css";

// const MOVIE_API_URL = 'http://www.omdbapi.com/?s=woman&apikey=4a3b711b';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      search: "woman",
      reply: ""
    };
  }

  componentDidMount = () => {
    this.searchMovie();
  };
  searchMovie = () => {
    this.setState({ loading: true });
    fetch(`https://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`)
      .then(res => res.json())
      // .then(jsonres => {
      //   this.setState({
      //     movies: jsonres.Search || [],
      //     loading: false
      //   })

      //   console.log(this.state.movies);
      // })
      .then(jsonres => {
        if (
          jsonres.Search === undefined ||
          Object.keys(jsonres.Search).length === 0
        ) {
          this.setState({
            reply: "Search not found",
            loading: false
          });
          console.log(this.state.reply);
        } else {
          this.setState({
            movies: jsonres.Search || [],
            reply: "",
            loading: false
          });
        }
      })

      .catch(error => {
        console.log(error);
      });
  };
  submitSearch = value => {
    this.setState({ search: value }, () => {
      this.searchMovie();
    });
  };

  render() {
    const { reply, movies, loading, search } = this.state;
    console.log(movies);

    return (
      <div className="App ">
        <Header title="NENNYFILLS" />

        <div className="row mb-4">
          <Search getSearch="Search" submit={this.submitSearch} />
        </div>
        <div>
          <h3>
            {search} {reply}
          </h3>
        </div>

        <div className="row m-3 ">
          {loading ? (
            <img
              alt="Loading"
              src={spinner}
              style={{ margin: "40px auto", display: "block" }}
              className=""
            />
          ) : (
            movies.map((movie, index) => (
              <Movie
                className=""
                // key={movie.id}
                key={`${index}-${movie.title}`}
                movie={movie}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
