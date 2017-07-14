import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

const render = (Component) => {
    ReactDOM.render(<Root />, document.getElementById('root'));
}

registerServiceWorker();

render(Root);

if ( module.hot ) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/Root').default;
        render(NextRoot);
    });
};