// Create a component <EvenClicks> that displays "Even" if it's been clicked an 
// even number of times and "Odd" if it's been clicked an odd number of times.

import React, { Component } from "react";

class EvenClicks extends Component {
	// add a constructor method
	// it gets passed props as its first argument
	constructor(props) {
		// make sure you always add this, it makes Component work
		super(props);

		// set up our state
		// just a plain old JavaScript object
		this.state = {
			// could do with boolean but as using number +1 of count then use number
			clicked: false,
		};

		// force this to always be *this* this in handleClick
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// set new value
		// pass in a JavaScript object with values we want to updated
		this.setState({ clicked: true })
	}

	render() {
		return (
			<header className="jumbotron" onClick= { this.handleClick }>
				<p onClick={ this.handleClick }>
					{this.state.clicked ? "Even" : "Odd" }				
				</p>
			</header>
		);
	}
}

export default EvenClicks;