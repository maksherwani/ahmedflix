import React, { useState } from 'react';
import { colors,Appstyles } from '../Styles/index'
import {height} from '../helpers/constants'
import {ImageBackground,View} from 'react-native';
import { Button,Text} from 'native-base'

export const Fullimage =(props)=> {
  return(
    <ImageBackground
    {...props}
    source={require('../../assets/image1.jpg')}
    overflow= 'hidden'
    backgroundColor={colors.black}
    style={{borderWidth: 0,flex:1,width: null,height:height,justifyContent:'center'}}>
    <Button block success onPress={props.onPress}    style={{backgroundColor:colors.error,elevation:0,borderRadius:8, height:40,margin:20,marginTop:height/1.2}}>
    <Text style={Appstyles.ButtontextStyle}>Log in</Text>
    </Button>
    <Button block success onPress={props.onPresssignup}    style={{backgroundColor:colors.error,elevation:0,borderRadius:8, height:40,marginLeft:20,marginRight:20,marginBottom:20}}>
    <Text style={Appstyles.ButtontextStyle}>Sign Up</Text>
    </Button>
    </ImageBackground>
  )
}
