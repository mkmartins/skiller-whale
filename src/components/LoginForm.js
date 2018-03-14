import React , { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Card } from './Common/Card'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { connect } from 'react-redux'
import { Button, Input, Bubble, Spinner } from 'nachos-ui'

class LoginForm extends Component {

    onEmailChange = text => {
        this.props.emailChanged(text)
    }
    onPasswordChange = text => {
        this.props.passwordChanged(text)
    }
    onButtonPress = () => {
        const { email, password } = this.props
        this.props.loginUser({email, password})
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <View>
                    <Text style={{color:'red', alignContent: "center"}}>
                        { this.props.error }
                    </Text>
                </View>
            )
        }
    }

    renderButton = () => {
        const marginStyle = { marginTop: 15, alignSelf:'center' }
        if (this.props.loading) {
            return (
                <Spinner style={marginStyle} />
            )
        } else {
            return(
                <Button style={marginStyle} onPress={this.onButtonPress} type='success' kind='squared'>
                    Login
                </Button>
            )
        }
    }

    render() {
        const marginStyle = { marginTop: 15 }
        return(
            <ScrollView>
            <View style={{backgroundColor:'white', flex: 1}}>
                <View style={{alignContent:"center"}}>
                    <Image source={require('../../SKILLER-WHALE-logo.png')} style={{width: 120, height: 100, marginTop: 15, marginBottom: 15, alignSelf: 'center'}} />
                </View>
                <View style={styles.containerSyle}>
                        <Input 
                            //label="Email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange}
                            value={this.props.email}
                        />

                        <Input 
                            style={{marginTop: 15}}
                            secureTextEntry
                            placeholder="password"
                            onChangeText={this.onPasswordChange}
                            value={this.props.password}
                        />

                        {this.renderError()}

                        {this.renderButton()} 
                        
                        <View style={{marginLeft: 30, marginRight: 30, marginTop:50, marginBottom:20}}>
                            <Bubble style={{marginRight: 50}}>
                                Hey, We know this app doesn't look great. 
                                But, this is a very barebones app to see if our idea is any good.
                            </Bubble>
                            <Text>Brett</Text>
                            
                            <Bubble style={{marginLeft: 50, marginTop: 15}} arrowPosition='right'color='#ff9c00'>
                                And we need your help to figure out if we should invest more time
                                in this thing. So, be honest in your answers. If we suck, let us 
                                know.
                            </Bubble>
                            <Text style={{textAlign: 'right'}}>Marcos</Text>
                        </View>                   
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = {
	containerSyle: {
		backgroundColor: 'white',
		borderBottomWidth: 0,
		elevation: 1,
		marginLeft: 10,
		marginRight: 10,
        marginTop: 10,
	}
};

const mapStateToProps = (state) => {
    const {email, password, error, loading} = state.auth
    return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)