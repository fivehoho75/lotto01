import React from 'react';
import BallList from 'components/ball/BallList'

const BallContainer = ({balls}) => {
    //console.log('BallContainer: ' + JSON.stringify(balls));
    return (
            <div>
                <BallList balls={balls}/>  
            </div>
        );
};

export default BallContainer;