import React, { Component } from 'react';
import Header from 'components/header/Header';
import BallContainer from './BallContainer';
import Logo from 'components/header/Logo'
import ActionButton from './ActionButton'
import { getRandom } from 'utils';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: getRandom()
        }
    };

    handleButton = (types) => {
        //console.log('===========handleButton');
        this.setState({value: getRandom()});
    };

    render() {
        const { handleButton } = this;

        //console.log('state: '+ this.state.value);
        return (
            <div>
                <Header>
                    <Logo/>
                </Header>
                <ActionButton onClick={
                    () => handleButton('make')
                }/>
                <BallContainer balls={this.state.value}/>
            </div>
        );
    }
}

export default App;