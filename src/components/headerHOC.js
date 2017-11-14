import React, { Component } from 'react';

import Wrapper from '../styles/wrapper-style';
import HeaderStyle from '../styles/header-style';

export default function HeaderHOC(WrappedHeader) {
    return class Header extends Component {
        constructor(props) {
            super(props);

            this.state = { headerstate: "This is the header state set in construct"};

            this.onChangeClick = this.onChangeClick.bind(this);
           
        }

        onChangeClick() {
            console.log("this is from onChangeClick")
        }
      
        render() {
          
            return (
                <div>
                    header start <br />
                    <Wrapper>
                            <HeaderStyle>
                                This is the header printed from HOCHeader <br/>
                                Below is the content from the WrappedHeader:
                                <WrappedHeader  ref="customheader" {...this.props} onClick={this.onChangeClick} />
                                Props in header: <br/>
                                {this.props.value}<br/>
                                State in header:<br/> 
                                {this.state.headerstate} <br/>
                            </HeaderStyle>
                           
                    </Wrapper>
                    header end <br />
                </div>
            );
        }
    }
}
