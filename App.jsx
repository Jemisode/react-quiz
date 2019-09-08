// imports for react and DOM version of React Router 

import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";
import MinimumLength from "./MinimumLength";

const App = () => (
  <Router>  
      <div>
        <Route path="/even-clicks" component={ EvenClicks } />
        <Route path="/hide-me" render={ () => (
          <HideMe>Blah blah blah</HideMe>
        ) } />
        <Route path="/count-by/:step" render={ ({ match }) => (
          <CountBy step={ +match.params.step } />
        ) } />
        <Route path="/minimum/:length" render={ ({ match }) => (
          <MinimumLength length={ +match.params.length } />
        ) } />  
        <Route path="/multiplier/:x/:y" render={ ({ match }) => (
          <Multiplier x={ match.params.x } y={ match.params.y } />
        ) } />
      </div>
  </Router>

);

export default App;