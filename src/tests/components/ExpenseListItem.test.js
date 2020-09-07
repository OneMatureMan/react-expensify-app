import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';


test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})