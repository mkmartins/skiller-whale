import React, {Component} from 'react'
import { Keyboard, Text, View, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView , Dimensions} from 'react-native'
import { Button, Switcher, Spinner } from 'nachos-ui'
import { connect } from 'react-redux'
import { pageLoaded } from '../actions'
import firebase from 'firebase'
import axios from 'axios'
import FitImage from 'react-native-fit-image'

class Content extends Component {
    constructor(props) {
        super()
        this.state = {
            likedIt: '',
            willComeBack: '',
            comment: ''
        }
    }
    componentWillMount() {
        this.props.pageLoaded()
    }

    onButtonPress = (value) => {
        axios.post('https://like-me-api.firebaseio.com/likedIt.json', {answer: this.state.likedIt})
        .then(response =>{
            console.log(response.data)
            this.setState({likedIt:""})
        })
        axios.post('https://like-me-api.firebaseio.com/willComeBack.json', {answer: this.state.willComeBack})
        .then(response =>{
            console.log(response.data)
            this.setState({willComeBack:""})
        })
        axios.post('https://like-me-api.firebaseio.com/comment.json', {answer: this.state.comment})
        .then(response =>{
            console.log(response.data)
            this.setState({comment:""})
        })
        alert("Thank you so much. This means a lot to us!")
    }
    
    render() {
        const btnStyle = { margin: 10, borderRadius: 5 }
        return(
            <View style={{backgroundColor:'white', flex:1}}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="position"
                >
                    <ScrollView>
                        {this.props.image === "" &&
                            <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
                                <Text>YOLO</Text>
                                <Spinner />
                            </View>
                        }
                        { this.props.image !== "" &&                       
                            <FitImage  indicator={false} indicatorColor="white"  indicatorSize="large" source={{uri: this.props.image}} />
                        }
                        <View style={{backgroundColor:"white"}}>
                            <Button onPress={this.onButtonPress}  kind='squared'>
                                Did You Enjoy This Content?
                            </Button>
                            <Switcher onChange={value => this.setState({likedIt:value})}>
                                <Button type='success' value='Yes' iconName='md-thumbs-up' style={btnStyle} >Yup</Button>
                                <Button type='success' value='No' iconName='md-thumbs-down' style={btnStyle} >Nope</Button>
                                <Button type='success' value='NoNo' iconName='md-sad' style={btnStyle} >Don't Care</Button>
                            </Switcher>
                            <Button kind='squared'>
                                Are You Looking Forward to Coming Back?
                            </Button>
                            <Switcher onChange={value => this.setState({willComeBack:value})}>
                                <Button type='success' value='Yes' iconName='md-thumbs-up' style={btnStyle} >Yes</Button>
                                <Button type='success' value='No' iconName='md-thumbs-down' style={btnStyle} >No</Button>
                                <Button type='success' value='NoNo' iconName='md-sad' style={btnStyle} >Not Sure</Button>
                            </Switcher>
                            <Button kind='squared'>
                                What comes to mind?
                            </Button>
                            <TextInput
                                onSubmitEditing={Keyboard.dismiss}
                                height = {100}
                                multiline={true}
                                numberOfLines={4}
                                placeholder='What did you like? What can we do better?'
                                value={this.state.comment}
                                onChangeText={value => this.setState({ comment: value })}
                            />
                            <Button onPress={this.onButtonPress} type='danger' style={{marginBottom:10}}>
                                Submit Your Answers!
                            </Button>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

mapStateToProps = (state) => {
    return (image = state.tips)
}

export default connect(mapStateToProps, {pageLoaded})(Content)