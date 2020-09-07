import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});


test('should set sortBy to date', () => {
    const currentState = {
        text : '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
});


test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text:'Gogle.com'});
    expect(state.text).toBe('Gogle.com')
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(0)})
    expect(state.startDate).toStrictEqual(moment(0))
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(20)})
    expect(state.endDate).toStrictEqual(moment(20))
})