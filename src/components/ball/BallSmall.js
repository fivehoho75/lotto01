import React, { Component } from 'react';

class BallSmall extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="BallSmall">
                {this.props.number}   
            </div>
        );
    }
}

export default BallSmall;