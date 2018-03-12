import firebase from 'firebase'

import { IMG_LOADED } from './types'

export const pageLoaded = () => {
    return(dispatch) => {
        firebase.database().ref(`/image`)
            .on('value', snapshot=>{
                const image = snapshot.val()
                dispatch({type: IMG_LOADED, payload: image})
            })
    }
}