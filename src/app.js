import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';


const store = configureStore();
console.log('test')

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>  
)


ReactDOM.render(jsx , document.getElementById('app'))