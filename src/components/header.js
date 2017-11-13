import React, { Component } from 'react';


import Wrapper from '../styles/wrapper-style'; 
import HeaderStyle from '../styles/header-style'; 



class Header extends Component {

  onEnglishClick() {
    console.log('onEnglishClick')
  
  }

  onAfrikaansClick() {
    console.log('onAfrikaansClick')
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
        </div>
    );
  }
}

export default Header;
