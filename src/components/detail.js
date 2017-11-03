import React, { Component } from 'react'

class Detail extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {this.props.message}
                <br/>
                Other content
            </div>
        );
    }
}

export default Detail