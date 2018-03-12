import React, { Component } from 'react'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {

    componentWillMount() {
        //initialize firebase
        const config = {
            apiKey: "AIzaSyAeqUYpZpD2-V7TM2kBcaN3GFHw6yMKqIA",
            authDomain: "mvp-app-d24c0.firebaseapp.com",
            databaseURL: "https://mvp-app-d24c0.firebaseio.com",
            projectId: "mvp-app-d24c0",
            storageBucket: "mvp-app-d24c0.appspot.com",
            messagingSenderId: "620660106898"
        }
        firebase.initializeApp(config)
    }

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App