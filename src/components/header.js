import React, { Component } from 'react';
import {Link, Router} from  'react-router-dom'; 

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
            <Wrapper>
                <button onClick={this.onEnglishClick}>English</button>
                <button onClick={this.onAfrikaansClick}>Afrikaans</button>
                <HeaderStyle>
                    <nav className="nav navbar-light">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                              
                            </li>
                        </ul>
                        </nav>
                    Internationalization
                </HeaderStyle>

            </Wrapper>
        </div>
    );
  }
}

export default Header;
