import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const startSetExpenses = jest.fn()
    const wrapper = shallow(<ExpenseList expenses={expenses} startSetExpenses={startSetExpenses} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList without expenses', () => {
    const startSetExpenses = jest.fn()
    const wrapper = shallow(<ExpenseList expenses={[]} startSetExpenses={startSetExpenses} />);
    expect(wrapper).toMatchSnapshot(); 
})