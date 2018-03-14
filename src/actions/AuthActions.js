import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {   
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER,
    LOGOUT_USER 
} from './types'

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const userLoggedIn = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              Actions.main()
            }
        })
    }
}

export const loginUser = ({ email, password }) => {
    //create a helper method to avoid duplicate code
    return (dispatch) => {
        dispatch({type: LOGIN_USER})

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({type: LOGIN_USER_SUCCESS, payload: user})
            Actions.main()
        })
        .catch((error) => {
            console.log(error)

            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => {
                dispatch({type: LOGIN_USER_SUCCESS, payload: user})
                Actions.main()
            })
            .catch(()=> login_user_fail(dispatch))
        }) 
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(user=> {
            dispatch({ type: LOGOUT_USER })
            Actions.auth()
        })
    }
}

const login_user_fail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL})
}