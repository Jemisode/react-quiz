// Create a component <CountBy step={ 5 }> that takes a step prop. 
// It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step

import React, { Component } from "react";

class CountBy extends Component {
	// add a constructor method
	// it gets passed props as its first argument
	constructor(props) {
		// make sure you always add this, it makes Component work
		super(props);

		// set up our state
		// just a plain old JavaScript object
		this.state = {
			count: 0,
		};

		// force this to always be *this* this in handleClick
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// set new value
		// pass in a JavaScript object with values we want to updated
		let { count } = this.state;
		let { step } = this.props; 
		this.setState({ count: count + step })
	}

	render() {
		let { count } = this.state;
		return (	
			<header className="jumbotron" onClick= { this.handleClick }>
				<p onClick={ this.handleClick }> { count }				
				</p>
			</header>
		);
	}
}

export default CountBy;