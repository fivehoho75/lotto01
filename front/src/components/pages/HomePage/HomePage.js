import React, { Component } from 'react';
import BallContainer from 'containers/BallContainer';
import ActionButton from 'containers/ActionButton'
import { getRandomList } from 'utils';
import { connect } from 'react-redux';
import * as actions from 'modules';
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class HomePage extends Component {

    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { onMake, onMakeFive, status: {base} } = this.props;
        const { activeItem } = this.state
        //console.log('state: '+ this.state.value);
        return (
            <div>
                <Menu secondary>
                    <Menu.Item header><Link to="/" className="logo">Lotto</Link></Menu.Item>  
                    <Menu.Item name='TT' active={activeItem === 'TT'} onClick={this.handleItemClick} />
                    <Menu.Item name='Result' active={activeItem === 'Result'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Button primary>Sign up</Button>
                    </Menu.Menu>
                </Menu>
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

export default connect(mapStateToProps, mapToDispatch)(HomePage);