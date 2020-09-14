import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
});

test('should add expense', () => {
    const expense = {
            id: 'abc123',
            description: 'Medusa',
            amount: 120000,
            createdAt: 20,
            note: ''
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
});


test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };

    const state = expensesReducer([], action);
    expect(state).toEqual([...expenses])
})


test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'Medusa 2.2',
            note: 'kora'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).toEqual({
        id: '1',
        description: 'Medusa 2.2',
        note: 'kora',
        amount: 1200,
        createdAt: 0
    })

});


test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2',

    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
});

