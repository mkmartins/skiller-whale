import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TipsReducer from './TipsReducer'

export default combineReducers({
    auth: AuthReducer,
    tips: TipsReducer
})