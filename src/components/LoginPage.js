import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        startLogin()
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Username: </label>
            <input type="text" name="username"/>
            <label>Password: </label>
            <input type="password" name="password"/>
            <button>Login</button>
        </form>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
