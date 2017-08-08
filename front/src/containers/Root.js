import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';

class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <App/>  
            </Provider>
        );
    }
}

export default Root;