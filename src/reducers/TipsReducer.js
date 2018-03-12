import { IMG_LOADED } from '../actions/types'

const INIT_STATE = {image:""}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case IMG_LOADED:
            return {...state, image: action.payload}
        default:
            return state
    }
}