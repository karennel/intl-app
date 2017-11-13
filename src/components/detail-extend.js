import React, { Component } from 'react'

class DetailExtend extends Component {
    render() {
        return (
            <div>
                This is extended from detail
                {this.props.extended}
            </div>
        );
    }
}

export default DetailExtend