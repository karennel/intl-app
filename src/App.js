import React, { Component } from 'react';

import Header from './components/header'
import Detail from './components/detail'

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
        <Header />
        <Detail message="This is the props message passed from detail">
          {this.props.children}
        </Detail>
      </div>
    );
  }
}

export default App;
