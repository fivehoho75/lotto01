import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducers from './modules';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = (Component) => {
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
}

registerServiceWorker();

render(Root);

if ( module.hot ) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/Root').default;
        render(NextRoot);
    });
};