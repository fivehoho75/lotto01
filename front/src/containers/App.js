import React, { Component } from 'react';
import BallContainer from './BallContainer';
import ActionButton from './ActionButton'
import { getRandomList } from 'utils';
import { connect } from 'react-redux';
import * as actions from 'modules';

class App extends Component {
    render() {
        const { onMake, onMakeFive, status: {base} } = this.props;
        //console.log('state: '+ this.state.value);
        return (
            <div>
                <div className="ui menu">
                    <div className="header item logo">Lotto</div>   
                </div>
                <ActionButton  onMake={onMake} onMakeFive={onMakeFive}/>
                <BallContainer balls={base.getIn(['balls'])} count={base.getIn(['count'])}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    status: {base: state}
});

const mapToDispatch = (dispatch) => ({
    onMake: () => dispatch(actions.make(getRandomList(1))),
    onMakeFive: () => dispatch(actions.makeLoop(getRandomList(5)))
});

export default connect(mapStateToProps, mapToDispatch)(App);