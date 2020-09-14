import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Video Game',
    note: '',
    amount: 1200,
    createdAt: 0
},{
    id: '2',
    description: 'Clay',
    note: '',
    amount: 42,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Creppe',
    note: '',
    amount: 2000,
    createdAt: moment(0).add(4,'days').valueOf()
}]

export default expenses;