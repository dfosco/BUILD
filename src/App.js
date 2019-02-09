import React, { Fragment, Component } from 'react';
import Viewer from './viewer';

class App extends Component {
  render() {
    return (
      <Viewer>
        <div className="bg-blue">.</div>
        <div className="bg-red">.</div>
      </Viewer>
    );
  }
}

export default App;
