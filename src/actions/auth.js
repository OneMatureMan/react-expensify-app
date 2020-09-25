import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})


export const startLoginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLoginWithFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}

export const startSignupWithEmail = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(pro => {
                console.log(pro)
            })
            .catch((error) => {
                if (error.message === 'The email address is already in use by another account.') {
                    return 'Email already taken'
                } else {
                    return error.message
                }
            })
    }
}

export const startLoginWithEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email,password)
            .then(result => {
                console.log(result)
            }).catch(() => {
                return 'Please enter a valid Email/Password'
            })
    }
}

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}