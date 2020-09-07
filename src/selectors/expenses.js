import moment from 'moment';

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = startDate ? moment(expense.createdAt).isSameOrAfter(startDate) : true
        const endDateMatch = endDate ? moment(expense.createdAt).isSameOrBefore(endDate) : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        return a.amount < b.amount ? 1 : -1
        
    })
}