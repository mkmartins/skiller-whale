import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class UserProfile extends Component {
    render() {
        return(
            <View style={{backgroundColor:'#e4cd77', flex: 1}}>
                <Text style={styles.textStyle}>
                    In The Near Future, Your Saved Content Will Go Here!
                </Text>
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf:'center', 
        color:'white',
        fontFamily: 'Academy Engraved LET',
        fontSize: 50,
    }
});

export default UserProfile