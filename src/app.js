import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';


const store = configureStore();


const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

store.dispatch(addExpense({ description:'Water bill', amount: 2000, createdAt:2 }));
store.dispatch(addExpense({ description:'Gas bill', amount: 4000 }));
store.dispatch(addExpense({ description:'Farmazy bill', amount: 3000, createdAt:20000 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>  
)


ReactDOM.render(jsx , document.getElementById('app'))