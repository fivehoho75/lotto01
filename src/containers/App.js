import React, { Component } from 'react';
import BallContainer from './BallContainer';
import ActionButton from './ActionButton'
import { getRandom } from 'utils';
import { connect } from 'react-redux';
import * as actions from 'modules';

class App extends Component {
    render() {
        const { onMake } = this.props;
        //console.log('state: '+ this.state.value);
        return (
            <div>
                <div className="ui menu">
                    <div className="header item logo">Lotto Creator</div>   
                </div>
                <ActionButton onMake={onMake}/>
                <BallContainer/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onMake: () => dispatch(actions.make(getRandom()))
});

export default connect(null, mapToDispatch)(App);