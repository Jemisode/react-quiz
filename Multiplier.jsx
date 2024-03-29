// Create a component <Multiplier x={ 5 } y={ 7 } /> that takes two props,
// x and y, and outputs their product (i.e. x × y) in a <p>.

import React from "react";

const Multiplier = ({ x, y }) =>  <header className="jumbotron"><p className="lead"> { x * y } </p></header>;

export default Multiplier;