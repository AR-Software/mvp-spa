import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import AppStore from './redux/appStore';
import './index.css';


ReactDOM.render(
    <HashRouter>
        <Provider store={AppStore}>
            <App />
        </Provider>
    </HashRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
