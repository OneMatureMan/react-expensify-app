import {addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const createMockStore = configureStore([thunk]);

test('should set up add expense action object with provided values', () => {

    const expenseData = { 
        description:'Go to cafiteria', 
        amount:12000, 
        createdAt: 1000,
        note:'Black pitter'
    }
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
})


test('should add expense to database and store with default values', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done();
    });  
});


test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 30000,
        note: 'Must payday',
        createdAt: 2000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    });  
});


test('should setup remove expense action object', () => {
    const action = removeExpense({id:'abc123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('abc123',{ note: 'Kamel tap'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'abc123',
        updates: {
            note:'Kamel tap'
        }
    })
})