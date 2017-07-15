import React, { Component } from 'react';
import Header from 'components/header/Header';
import BallContainer from './BallContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BallContainer/>
            </div>
        );
    }
}

export default App;