import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up add expense action object with provided values', () => {

    const expenseData = { 
        description:'Go to cafiteria', 
        amount:12000, 
        createdAt: 1000,
        note:'Black pitter'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note:'',
            createdAt:0,
            amount:0,
            id: expect.any(String)
        } 
    })
})

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