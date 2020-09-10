import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';


test('Should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0)
});

test('Should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(1200)
});

test('Should correctly add up multiples expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(3242)
});

