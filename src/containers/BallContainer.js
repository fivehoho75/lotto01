import React, { Component } from 'react';
import { List, Map } from 'immutable';
import BallList from 'components/BallList'

const balls = List([
        Map({
            color: 'black',
            number: 0
        }),
        Map({
            color: 'red',
            number: 1
        }),
        Map({
            color: 'gray',
            number: 2
        }),
        Map({
            color: 'blue',
            number: 3
        }),
        Map({
            color: 'violet',
            number: 4
        }),
        Map({
            color: 'orange',
            number: 5
        })
    ]);

class BallContainer extends Component {

    render() {
        return (
            <div>
                <BallList balls={balls}/>  
            </div>
        );
    }
}

export default BallContainer;