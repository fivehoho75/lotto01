import React from 'react';
import PropTypes from 'prop-types';

const Ball = ({number, color}) => {
    return (
        <div style={{backgroundColor: color}} className="Ball">
            {number}
        </div>
    )
};


Ball.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string
};

Ball.defaultProps = {
    number: 0,
    color: 'black'
};

export default Ball;