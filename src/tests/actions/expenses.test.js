import {addExpense, setExpenses , startAddExpense, editExpense, removeExpense, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const createMockStore = configureStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt };
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

test('should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
})

test('should setup remove expense action object', () => {
    const action = removeExpense({id:'abc123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'abc123'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('abc123',{ note: 'Kamel tap'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'abc123',
        updates: {
            note:'Kamel tap'
        }
    })
});

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



test('should setup set expenses action object', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});


test('Should set the database expenses as the state', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        console.log(store.getActions()[0])
        expect(store.getActions()[0]).toEqual({
            type: 'SET_EXPENSES',  
            expenses
        });
        done();
    })

})