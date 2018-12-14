import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import routes from './routes';


const store = configureStore();
var mountNode = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    mountNode);
