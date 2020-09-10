import React from 'react';
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    // const total = numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')
    // const func = () => {
    //     if (props.expenses.length === 0) {
    //         return null
    //     } else if (props.expenses.length === 1){
    //         return <p>Viewing 1 expense totaling {total}</p>
    //     } else {
    //         return <p>Viewing {props.expenses.length} expenses totaling {total}</p>
    //     }
    // }
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totaling {formattedTotal}</h1>
        </div>
    )
}
    


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    const expensesTotal = selectExpensesTotal(visibleExpenses);
    
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal
    }
};


export default connect(mapStateToProps)(ExpenseSummary);