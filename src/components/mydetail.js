import React, { Component } from 'react'

import Detail from './detail'

class MyDetail extends Detail {
    render() {
        return (
            <div>
                <Detail/>
                This is MyDetail
            </div>
        );
    }
}

export default MyDetail