import React, { Component } from 'react';

import Wrapper from '../styles/wrapper-style';
import HeaderStyle from '../styles/header-style';

function HOCHeader(WrappedHeader) {
    return class Header extends Component {
        constructor(props) {
            super(props);

            this.state = { headerstate: "This is the header state AB" };

            this.onChangeClick = this.onChangeClick.bind(this);
        }

        onChangeClick(event) {
            let newstate = "Header state set to " + event;
            this.setState({ headerstate: newstate });

        }

        render() {
            console.log('Children', this.props.children)

            return (
                <div>
                    header start <br />
                    <Wrapper>
                        <button onClick={() => this.onChangeClick('OptionA')}>OptionA</button>
                        <button onClick={() => this.onChangeClick('OptionB')}>OptionB</button>
                        <HeaderStyle>
                            This is the headerAB
                </HeaderStyle>
                    </Wrapper>
                    header end <br />
                    {<p>{this.state.headerstate}</p>}
                </div>
            );
        }
    }
}
