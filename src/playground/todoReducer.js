import { createStore } from 'redux';

const addTodo = (todo) => ({
    type: 'ADDTODO',
    todo    
})

const removeTodo = (todo) => ({
    type: 'REMOVETODO',
    todo
})

const initState = {
    todos: []
}


const listReducer = (state = initState, action ) =>  {
    switch (action.type) {
        case 'ADDTODO':
            return {
                todos : state.todos.concat(action.todo)
            }
        case 'REMOVETODO':
            const findItem = state.todos.indexOf(action.todo,0)
            console.log(state.todos[findItem])
            if (findItem !== -1){
                console.log(findItem)
                return {
                    todos: state.todos.slice(0,findItem)
                }
            }
        default:
            return state;
    }
}


const store = createStore(listReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addTodo('A7zan kalbi la tazol'));
store.dispatch(addTodo('orange'));
store.dispatch(removeTodo('orange'));
store.dispatch(addTodo('Snake to the taker under'));

