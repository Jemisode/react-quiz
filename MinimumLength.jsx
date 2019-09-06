// Create a component <MinimumLength length={ 30 }> that contains an <input>.
// The user should see a warning, "Too short!", unless they have entered at least length characters.

import React, { Component } from "react";

class MinimumLength extends Component {
	// add a constructor method 
	// it gets passed props as its first argument 
	constructor(props) {
		// always make sure you add the super(props) to make the Component work
		super(props);

		// set up our state
		// add the value of the input to the state
		this.state = { 
			value: "", 

		};

		// don't forget to bind the handleChange method
		this.handleChange = this.handleChange.bind(this);
	
	}

	// e is the standard DOM event object
	handleChange(e) {
		// e.currentTarget: DOM element we attached the event handler to
		// use the value property to read its current value 
		this.setState({ value: e.currentTarget.value });
	}

	render() {
		let { value } = this.state; 
		let { length } = this.props;

		return (
			<div className="from-group">
				<input 
				className="form-control"
				onChange= { this.handleChange }
				value= { value }
				/>
				{ value.length < length ? <p className="help-block">Too short!</p> : null }
			</div>
		);
	}
} 

export default MinimumLength;