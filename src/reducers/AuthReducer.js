import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER } from '../actions/types'

const INIT_STATE =  {user: null, email: "", password: "", error:"", loading: false}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: ""}
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: "" }
        case LOGIN_USER:
            return { ...state, loading: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INIT_STATE, user: action.payload}
        case LOGIN_USER_FAIL:
            return { ...state, error: "Authentication Failed.", password: "", loading: false }
        case LOGOUT_USER:
            return INIT_STATE

        default:
            return state 
    }
}