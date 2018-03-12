import React from 'react'
import { Scene, Router, Actions, Stack } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Content from './components/Content'
import { connect } from 'react-redux'
import { logoutUser } from './actions'
//import UserProfile from './components/UserProfile'

class RouterComponent extends React.Component {

    logoutUser = () => {
        this.props.logoutUser()
    }

    render() {
        return(
            <Router navigationBarStyle={styles.navBar}>
                <Stack key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene
                            key="login" 
                            component={LoginForm} 
                            title="YAY, you're here!" 
                            initial
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene 
                            rightTitle="Log Out" 
                            onRight={ this.logoutUser }
                            key="UserProfile" 
                            component={Content} 
                            title="Skiller Whale" 
                        />
                        {/* <Scene key="UserProfile" component={UserProfile} title="Create Employee" /> */}
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

export default connect(null, { logoutUser })(RouterComponent)