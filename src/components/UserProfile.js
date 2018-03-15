import React, { Component } from 'react'
import { View, Text } from 'react-native'

class UserProfile extends Component {
    render() {
        return(
            <View style={{backgroundColor:'white', flex: 1}}>
                <Text style={{alignSelf:'center'}}>
                    Saved Content here
                </Text>
            </View>
        )   
    }
}

export default UserProfile