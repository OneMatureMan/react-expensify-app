import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithFacebook, startLoginWithGoogle, startLoginWithEmail } from '../actions/auth';
import LoggingForm from './LoggingForm';


export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook, startLoginWithEmail }) => (
    <div className="box-layout" >
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <LoggingForm 
                styledButton={'button--signin'}
                buttonName={'Sign in'}
                signingFunction={startLoginWithEmail}
            />
            <Link to='/signup' style={{alignSelf:"stretch", marginBottom: '129px'}}>
                <button className='button button--signup'>Sign up</button>
            </Link>
            <div className='login-alternatives'>
                <button className='button button--alternative-signin' onClick={startLoginWithGoogle}>Google sign in</button>
                <button className='button button--alternative-signin' onClick={startLoginWithFacebook}>Facebook sign in</button>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithEmail: (email, password) => dispatch(startLoginWithEmail(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
