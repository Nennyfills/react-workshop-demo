import React from 'react';

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ''
		};
	}

	setValue = (event) => {
		console.log(event.target.value);
		this.setState({ value: event.target.value.toUpperCase() });
	};

	submitForm = (event) => {
		console.log(event);

		this.props.submit(this.state.value);
		// for all default item on the browser you use event.preventDefault()
		event.preventDefault();
	};

	render() {
		return (
			<form className="searchF" onSubmit={this.submitForm}>
				<h3>Search a few of our favorite movie</h3>
				<input
					className="searchI"
					placeholder="Search for a movie"
					onChange={this.setValue}
					value={this.state.value}
				/>
				<button className="searchB">{this.props.getSearch}</button>
			</form>
		);
	}
}

export default Search;
