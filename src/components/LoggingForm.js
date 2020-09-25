import React from 'react';
import { Link } from 'react-router-dom';


class LoggingForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }))
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    }


    render() {
        return (
            <form 
                onSubmit={async (e) => {
                    e.preventDefault()
                    const error = await this.props.signingFunction(this.state.email,this.state.password);
                    if (error) {
                        this.setState(() => ({ error }));
                    }
                }}
                className="logging-form"
            >
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <label className='logging-form__label'>Email address</label>
                <input className='logging-form__input' type="email" onChange={this.onEmailChange}/>
                <label className='logging-form__label'>Password</label>
                <input className='logging-form__input' type="password" onChange={this.onPasswordChange}/>
                <button 
                    className={`button ${this.props.styledButton}`} 
                >   
                    {this.props.buttonName}
                </button>
            </form>  
        )
    }
}


export default LoggingForm;