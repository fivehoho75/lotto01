import React, { Component } from 'react';
import Ball from './Ball';

class BallSet extends Component {
    render() {
        let context = [];

        //console.log('count: ', this.props.count);
        //console.log('props00: ', JSON.stringify(this.props.balls));
        //if (this.props.count === 0) return;

        for(let i=0; i<this.props.count; i++) {
            //console.log('props11: ', JSON.stringify(this.props.balls.get(i)));
            context.push(
                <div key={i} className="BallList">
                    {
                        this.props.balls.get(i).map(
                            (ball, i) => (
                                <Ball
                                    key={i}
                                    index={i}
                                    {...ball.toJS()}
                                />
                            )
                        )
                    }
                </div>
            );
        };
        
        return (
            <div className="left" >
                {context}
            </div>
        );
    }
}

export default BallSet;