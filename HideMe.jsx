// Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content.
// When the component is clicked the content should be hidden.

import React, { Component } from "react"

class HideMe extends Component {
	// add a constructor method
	// it gets passed props as its first argument
	constructor(props) {
		// make sure you always add this, it makes Component work
		super(props);

		// set up our state
		// just a plain old JavaScript object
		this.state = {
			hidden: false,

		};

		// force this to always be *this* this in handleClick
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// set new value
		// pass in a JavaScript object with values we want to updated
		this.setState({ hidden: true })
	}

	render() {
		let { hidden } = this.state;
		let { children } = this.props; 
		return ( 
			// Use of null instead of "" (empty string) to display nothing
			<header className="jumbotron" onClick= { this.handleClick }>
				<p onClick={ this.handleClick }>{ hidden ? null : children }</p>
			</header>
		);
	}
}

export default HideMe;