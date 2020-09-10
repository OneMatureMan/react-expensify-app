import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';



test('Should return 1 expense with a total of 1200', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={1200} />)
    expect(wrapper).toMatchSnapshot()
});

test('Should return 2 expenses with a total of 80000', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={80000} />)
    expect(wrapper).toMatchSnapshot()
});