import React, { Component } from 'react'
import DetailExtend from './detail-extend'

class Detail extends Component {
    render() {
        return (
            <div>
                detail start 
                <br/>
                {this.props.message}
                <br/>
                <DetailExtend extended={this.props.children}>
                </DetailExtend>
                <br/>
                Other Detail Content
                detail end <br/>
            </div>
        );
    }
}

export default Detail