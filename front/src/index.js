import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducers from './modules';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = (Component) => {
    ReactDOM.render(<Component store={store}/>, 
        document.getElementById('root'));
}

render(Root);

if ( module.hot ) {
    module.hot.accept('./containers/Root', () => render(Root));
};

registerServiceWorker();