import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>My info</h1>
        <p>Fake Information Nation! : {props.info}</p>
        <p>{props.slacker}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Please make sure you are an admin</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You need to be authenticated brother!</p> }
        </div>
    )
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='What is it' /> , document.getElementById('app'))
ReactDOM.render(<AuthInfo slacker='We not gone be aight' isAuthenticated={true} info='We gone be alright' />, document.getElementById('app'))