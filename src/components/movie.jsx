import React, { Component } from 'react';

class Movie extends Component {
	state = {};
	render() {
		return (
			<div className="create">
				<h3>
					{' '}
					<strong>{this.props.movie.Title}</strong>{' '}
				</h3>
				<img src={this.props.movie.Poster} alt="" />
				<p>{this.props.movie.Year}</p>
				<p>{this.props.movie.imdbID}</p>
			</div>
		);
	}
}

export default Movie;
