import React from 'react';




const VisibleExpenses = ({ textFilter, startDate, endDate, allExpensesCount, expensesCount}) => {
    const expenseWord = (allExpensesCount - expensesCount) === 1 ? 'expense' : 'expenses';

    return (
        ((textFilter === '') && (startDate === null) && (endDate === null) || (allExpensesCount === expensesCount)) ? (
            <p className='visible-expenses-message'>Showing all expenses, no filters applied</p>
        ) : (
            <p className='visible-expenses-message'>Not showing <span>{allExpensesCount - expensesCount}</span> {expenseWord}</p>
        )
    )
    
}

export default VisibleExpenses;