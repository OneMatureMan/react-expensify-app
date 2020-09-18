import authReducer from '../../reducers/auth';



test('should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('should login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
     }
    const state = authReducer({}, action)
    expect(state).toEqual({
        uid: 'abc123'
    })
})


test('should logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'abc123' }, action);
    expect(state).toEqual({});
})