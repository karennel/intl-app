import React, { Component } from 'react';

import Wrapper from '../styles/wrapper-style'; 
import HeaderStyle from '../styles/header-style'; 


class Header extends Component {
  constructor(props) {
    super(props); 

    this.state = {headerstate:"This is the header state"}; 

    this.onEnglishClick = this.onEnglishClick.bind(this); 
    this.onAfrikaansClick = this.onAfrikaansClick.bind(this); 
  }

  onEnglishClick() {
    console.log('onEnglishClick')
    this.setState({headerstate:"Header state set to English"}); 
  
  }

  onAfrikaansClick() {
    console.log('onAfrikaansClick')
    this.setState({headerstate:"Header state set to Afrikaans"}); 
  
  }

  render() {
    console.log('Children', this.props.children)
    
    return (
        <div>
            header start <br/>
            <Wrapper>
                <button onClick={this.onEnglishClick}>English</button>
                <button onClick={this.onAfrikaansClick}>Afrikaans</button>
                <HeaderStyle>
                    Internationalization
                </HeaderStyle>
            </Wrapper>
            header end <br/>
            {<p>{this.state.headerstate}</p>}
        </div>
    );
  }
}

export default Header;
