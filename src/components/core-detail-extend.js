import React, { Component } from 'react'

class CoreDetailExtend extends Component {
    render() {
        return (
            <div>
                This is extended from detail
                {this.props.extended}
            </div>
        );
    }
}

export default CoreDetailExtend