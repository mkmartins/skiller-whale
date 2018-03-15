import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'

class Menu extends Component {

    render() {
        return(
            <View style={styles.main}>
                <TouchableHighlight onPress={() => {Actions.main()}} >
                    <View style={styles.itemTitle}s>
                        <Text style={styles.textStyle}>Today's{"\n"}  Tip</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.container}>
                    <TouchableHighlight onPress={() => {Actions.profile()}} >
                        <View style={styles.item}>
                            <Text style={styles.textStyle}>Saved {"\n"}Skills</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.props.logoutUser()}}>
                        <View style={[styles.item,{backgroundColor:'#dacf22'}]}>
                            <Text style={styles.textStyle}>Log Out</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )   
    }
}

var styles = StyleSheet.create({
    main: {
        backgroundColor:'white', 
        flex: 1
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.5,
        borderColor: "lightgray",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#5da2ef'       
    },
    itemTitle: {
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: '#008cf7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf:'center', 
        color:'white',
        fontFamily: 'Academy Engraved LET',
        fontSize: 50,
    }
});

export default connect(null, {logoutUser})(Menu)