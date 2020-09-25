import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignupWithEmail } from '../actions/auth';
import LoggingForm from './LoggingForm';


class SignupPage extends React.Component {
    render() {
        return (
            <div className='box-layout'>
                <div className="box-layout__box">
                    <Link to='/' className='navlink-wrapper'>
                        <button className='button button--navlink'>Back</button>
                    </Link>
                    <h1 className="box-layout__title">Sign up</h1>
                    <LoggingForm
                        styledButton={'button--signup'}
                        buttonName={'Sign up'}
                        signingFunction={this.props.startSignupWithEmail}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSignupWithEmail: (email, password) => dispatch(startSignupWithEmail(email, password))
})


export default connect(undefined,mapDispatchToProps)(SignupPage);