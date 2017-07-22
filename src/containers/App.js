import React, { Component } from 'react';
import BallContainerNew from './BallContainerNew';
import ActionButton from './ActionButton'
import { getRandomList } from 'utils';
import { connect } from 'react-redux';
import * as actions from 'modules';

class App extends Component {
    render() {
        const { onMake, onMakeFive } = this.props;
        //console.log('state: '+ this.state.value);
        return (
            <div>
                <div className="ui menu">
                    <div className="header item logo">Lotto</div>   
                </div>
                <ActionButton  onMake={onMake} onMakeFive={onMakeFive}/>
                <BallContainerNew/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onMake: () => dispatch(actions.make(getRandomList(1))),
    onMakeFive: () => dispatch(actions.makeLoop(getRandomList(5)))
});

export default connect(null, mapToDispatch)(App);