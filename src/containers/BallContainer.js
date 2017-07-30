import React, { Component } from 'react';
import BallSet from 'components/ball/BallSet'
import BallList from 'components/ball/BallList'

class BallContainer extends Component {
    render() {
        //console.log('balls: ', JSON.stringify(this.props.balls));
        //console.log('count: ', JSON.stringify(this.props.count));
        return (
            <div>
                <BallSet balls={this.props.balls} count={this.props.count}/>
                <BallList/>
            </div>
        );
    }
}

export default BallContainer;