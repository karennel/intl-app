import React, { Component } from 'react';

import Wrapper from '../styles/wrapper-style'; 
import HeaderStyle from '../styles/header-style'; 


class HeaderCD extends Component {
  constructor(props) {
    super(props); 

    this.state = {headerstate:"This is the header state CD"}; 

    this.onChangeClick = this.onChangeClick.bind(this); 
}

onChangeClick(event) {
  let newstate = "Header state set to " + event; 
  this.setState({headerstate:newstate}); 

}

  render() {
    console.log('Children', this.props.children)
    
    return (
        <div>
            <Wrapper>
            <button onClick={() => this.onChangeClick('OptionC')}>OptionC</button>
            <button onClick={() => this.onChangeClick('OptionD')}>OptionD</button>
            <button onClick={() => this.onChangeClick('OptionE')}>OptionE</button>
                <HeaderStyle>
                    {this.state.headerstate}
                </HeaderStyle>
            </Wrapper>
        </div>
    );
  }
}

export default HeaderCD;
