import React, { Component } from 'react';
import Header from './header';
import Movie from './movie';
import Search from './search';
import '../App.css';
import spinner from '../ajax-loader.gif';

// const MOVIE_API_URL = 'http://www.omdbapi.com/?s=woman&apikey=4a3b711b';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			loading: true,
			search: 'woman'
		};
	}

	componentDidMount = () => {
		this.searchMovie();
	};
	searchMovie = () => {
		this.setState({ loading: true });
		fetch(`https://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`)
			.then((res) => res.json())
			.then((jsonres) => {
				this.setState({
					movies: jsonres.Search || [],
					loading: false
				});
				console.log(jsonres.Search);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	submitSearch = (value) => {
		this.setState({ search: value }, () => {
			this.searchMovie();
		});
	};

	render() {
		return (
			<div className="App">
				<Header title="NENNYFILLS" />

				<div>
					<Search getSearch="Search" submit={this.submitSearch} />
				</div>

				<div className="mov">
					{this.state.loading ? (
						<img src={spinner} className="spinner" />
					) : (
						this.state.movies.map((movie, index) => (
							<Movie
								// key={movie.id}
								// movie={movie}
								// 	name={movie.title}
								// 	imgUrl={movie.poster}
								// 	year={movie.year}
								// 	description={movie.description}
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
