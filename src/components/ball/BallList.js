import React, { Component } from 'react';
import BallSmall from './BallSmall';
import { List, Map } from 'immutable';

class BallList extends Component {
    render() {
        let balls = List();
        for(let i=0;i<46;i++) {
            balls=balls.push(
                Map({
                    color: getColor(i+1),
                    number: i+1
                }
            ));
        };

        console.log('balls: ', JSON.stringify(balls));

        const content = balls.map((ball, i) => (
            <BallSmall 
                key={i}
                index={i}
                {...ball.toJS()}/>
        ));
        //console.log('contet: ', JSON.stringify(content));
        return (
            <div className="right">
                <div className="BallList">
                    {content}
                </div>
            </div>
        );
    }
}

function getColor(num) {
            //console.log('zzzzz: ' + Math.floor(num / 10));
            const colors = [
                'orange',
                '#0080FF',
                'red',
                '#404040',
                '#009900'
            ];

            return colors[Math.floor((num-1) / 10)];
        }
        
export default BallList;