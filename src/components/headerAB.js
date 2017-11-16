import React, { Component } from 'react';

import Wrapper from '../styles/wrapper-style';
import HeaderStyle from '../styles/header-style';


export default class HeaderAB extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = { headerstate: "This is the header state CD" };

  //   this.onChangeClick = this.onChangeClick.bind(this);
  // }

  // onChangeClick(event) {
  //   let newstate = "Called from HEADERAB - newstate: " + event;
  //   this.setState({ headerstate: newstate });

  // }

  render() {
    return (
      <div>
        <Wrapper>

          This is printed from headerAB <br/>
          {/* <button onClick={() => this.onChangeClick('OptionA')}>OptionA</button>
          <button onClick={() => this.onChangeClick('OptionB')}>OptionB</button> */}
          <button onClick={() => this.props.onChangeClick()}>OptionA</button>
          <button onClick={() => this.props.onChangeClick()}>OptionB</button>
          <br/>
          This is the props from the wrapped component: <br/>
          {this.props.value}
        </Wrapper>
      </div>
    );
  }
}

