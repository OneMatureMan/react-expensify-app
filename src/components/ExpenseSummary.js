import React from 'react';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import VisibleExpenses from './VisibleExpenses';


export const ExpenseSummary = ({expensesCount, expensesTotal, allExpensesCount, textFilter, startDate, endDate}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal/100).format('$0,0.00')

    return (
        <div className='page-header'>
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedTotal}</span></h1>
                <VisibleExpenses
                    allExpensesCount={allExpensesCount}
                    expensesCount={expensesCount}
                    textFilter={textFilter}
                    startDate={startDate}
                    endDate={endDate}
                />
                <div className="page-header__actions">
                    <Link to='/create'>
                        <button className='button'>Add Expense</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
    


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    const expensesTotal = selectExpensesTotal(visibleExpenses);
    
    return {
        allExpensesCount: state.expenses.length,
        expensesCount: visibleExpenses.length,
        expensesTotal,
        textFilter: state.filters.text,
        startDate: state.filters.startDate,
        endDate: state.filters.endDate
    }
};


export default connect(mapStateToProps)(ExpenseSummary);