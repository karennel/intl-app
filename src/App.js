import React, { Component } from 'react';

import HeaderAB from './components/headerAB'
import HeaderCD from './components/headerCD'
import Detail from './components/detail'

class App extends Component {

  render() {
    return (
      <div>
        App start <br/>
        <HeaderAB />
        <HeaderCD />
        
        <Detail message="Detail message passed in props">
          <div>this is children1 of Detail</div>
          <div>this is children2 of Detail</div>
          <div>this is children3 of Detail</div>
          <div>this is children4 of Detail</div>
          
        </Detail>
        App end <br/>
      </div>
    );
  }
}

export default App;
