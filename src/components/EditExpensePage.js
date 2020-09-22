import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onRemoveExpense = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/dashboard')
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense)
        this.props.history.push('/dashboard')
    }

    render() {
        return  (
            <div>
                <div className='page-header'>
                    <div className="content-container">
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>  
                </div>
                <div className='content-container'>
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit= {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemoveExpense}>
                        Remove Expense
                    </button>
                </div>
            </div>
        )

    }   
} 

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense : (id) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense))
})

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);