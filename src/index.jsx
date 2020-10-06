import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App/App';
import store from 'store';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider {...{store}}>
        <App/>
    </Provider>,
    document.getElementById('app'),
);

if (module.hot)
    module.hot.accept();
