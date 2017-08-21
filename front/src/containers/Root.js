import React, { Component } from 'react';
import App from './Apptemp';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class Root extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={App}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Root;