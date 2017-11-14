import React, { Component } from 'react';

import Header from './components/header'
import Detail from './components/detail'

class App extends Component {

  render() {
    return (
      <div>
        App start <br/>
        <Header />
        
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
