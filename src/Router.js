import React from 'react'
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Content from './components/Content'
import Splash from './components/Splash'
import { connect } from 'react-redux'
import { userLoggedIn } from './actions'
import UserProfile from './components/UserProfile'
import Menu from './components/Menu'

class RouterComponent extends React.Component {

    componentWillMount() {
        this.props.userLoggedIn()
    }

    render() {
        return(
            <Router navigationBarStyle={styles.navBar}>
                <Stack key="root" hideNavBar>
                    <Scene key="splash">
                        <Scene
                            key="Welcome" 
                            component={Splash} 
                            title="Skiller Whale" 
                            initial
                        />
                    </Scene>
                    <Scene key="menu">
                        <Scene
                            key="Menu" 
                            component={Menu} 
                            title="Skiller Whale" 
                        />
                    </Scene>
                    <Scene key="auth">
                        <Scene
                            key="login" 
                            component={LoginForm} 
                            title="YAY, you're here!" 
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene 
                            component={Content} 
                            title="Skiller Whale" 
                            back='true'
                        />
                    </Scene>
                    <Scene key="profile">
                        <Scene
                            key="profile" 
                            component={UserProfile} 
                            title="YAY, you're here!" 
                            back='true'
                        />
                    </Scene>
                </Stack>
            </Router>
        )

    }
}

const styles = {
    navBar:{
        backgroundColor:'white'
    }
}

export default connect(null, { userLoggedIn })(RouterComponent)