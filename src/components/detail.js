import React, { Component } from 'react'
import CoreDetailExtend from './core-detail-extend'

class Detail extends Component {
    render() {
        return (
            <div>
                detail start 
                <br/>
                {this.props.message}
                <br/>
                <CoreDetailExtend extended={this.props.children}>
                </CoreDetailExtend>
                <br/>
                Actual Native Detail Content<br/>
                detail end 
            </div>
        );
    }
}

export default Detail