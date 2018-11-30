import React, { Component } from 'react';

class Movie extends Component {
	state = {};
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.year}</p>
				<img src={this.props.imgUrl} alt="" />
				<p>{this.props.description}</p>
			</div>
		);
	}
}

export default Movie;
