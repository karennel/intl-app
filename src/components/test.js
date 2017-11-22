import React, { Component } from 'react';

class ClickLoggingButton extends React.Component {
    
    logOnClick = (...args) => {
        console.log('click');
        console.log(this.props); 

        const { onClick } = this.props;
        // const  onClick  = this.props;

        console.log(onClick); 

        if (onClick) {
            return onClick(...args);
        }
        console.log('this')
    }


    render() {
        return (
            <button value="this is the button value"
                {...this.props}
                onClick={this.logOnClick(1,2,3)}
            >
                {this.props.children}
            </button>
        ); 
    }
}

export default ClickLoggingButton; 