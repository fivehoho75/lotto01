import React, { Component } from 'react';
import Ball from './Ball';
import PropTypes from 'prop-types';
import { List } from 'immutable';

class BallTest extends Component {
    render() {
        //console.log('BallTest props: ', this.props.balls);
        const ballList = this.props.balls.map(
            (ball, i) => (
                <Ball
                    key={i}
                    index={i}
                    {...ball.toJS()}
                />
            )
        );

        return (
            <div className="BallList">
                {ballList}
            </div>
        );
    }
}

BallTest.propTypes = {
    balls: PropTypes.instanceOf(List)
};

BallTest.defaultProps = {
    balls: []
};

export default BallTest;