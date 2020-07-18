import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Room from '../component/Room.js';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/"
          render={props => 
            <Room></Room>
          }>
        </Route>
      </Router>
    );
  }
}

export default App;