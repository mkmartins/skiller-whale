import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { H3 } from 'nachos-ui'

const Splash = () => {
    return(
        <View style={{backgroundColor:'white', flex: 1}}>
            <Image source={require('../../SKILLER-WHALE-logo.png')} style={{width: 320, height: 300, marginTop: 15, marginBottom: 15, alignSelf: 'center'}} />
            <H3 style={{alignSelf:'center'}}>Anything You Can Do,{"\n"} You Can Do Better</H3>
        </View>
    )
}

export default Splash