import React, { Component } from 'react';

import Header from './components/header'
import Detail from './components/detail'
import MyDetail from './components/detail'



class App extends Component {

  onEnglishClick() {
    console.log('onEnglishClick')
  }

  onAfrikaansClick() {
    console.log('onAfrikaansClick')
  }

  render() {
    return (
      <div>
        App start <br/>
        <Header />
        <MyDetail/>
        <Detail message="Detail message">
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
