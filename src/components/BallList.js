import React from 'react';
import Ball from './Ball';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const BallList = ({ balls }) => {
    const ballList = balls.map(
        (ball, i) => (
            <Ball
                key={i}
                index={i}
                {...ball.toJS()}
            />
        )
    )
    
    return (
        <div className="BallList">
            {ballList}
        </div>
    );
};

BallList.propTypes = {
    balls: PropTypes.instanceOf(List)
};

BallList.defaultProps = {
    counters: []
};

export default BallList;