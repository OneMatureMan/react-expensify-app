import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onRemoveExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id})
        this.props.history.push('/')
    }

    onSubmit = (expense) => {
        this.props.editExpense(expense.id,expense)
        this.props.history.push('/')
    }

    render() {
        return  (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit= {this.onSubmit}
                />
                <button onClick={this.onRemoveExpense}>
                    Remove Expense
                </button>
            </div>
        )

    }   
} 

const mapDispatchToProps = (dispatch, props) => ({
    removeExpense : (date) => dispatch(removeExpense(date)),
    editExpense: (id,expense) => dispatch(editExpense(id,expense))
})

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);