import {View,Text,ImageBackground} from 'react-native';
import React from 'react';
import {Fullimage} from '../components/Fullimage'
import { colors,Appstyles } from '../Styles/index'
import {Textinput} from '../components/Textinput';
import {width,height} from '../helpers/constants'
import { Button} from 'native-base'

const signup = (props) => {
  return (
    <View style={{backgroundColor:colors.black,flex:1,alignItems:'center',justifyContent:'center',padding:20}}>

    <ImageBackground
    {...props}
    source={require('../../assets/image8.jpg')}
    overflow= 'hidden'
    backgroundColor={colors.black}
    style={{borderWidth: 0,width: width,height:height,justifyContent:'center'}}>
    <View style={{backgroundColor:colors.blacklight,borderRadius:13,margin:5}}>
    <Textinput placeholderText={"Email address"}/>
    <Textinput placeholderText={"Username"}/>
    <Textinput placeholderText={"Password"} secureTextEntry={true}/>
    <Button block success onPress={()=>props.navigation.navigate('videoList')}    style={{backgroundColor:colors.error,elevation:0,borderRadius:8, height:40,margin:20}}>
    <Text style={Appstyles.ButtontextStyle}>Proceed</Text>
    </Button>
    <Button block success onPress={()=>props.navigation.navigate('auth')}    style={{backgroundColor:colors.error,elevation:0,borderRadius:8, height:40,marginLeft:20,marginRight:20,marginBottom:20}}>
    <Text style={Appstyles.ButtontextStyle}>Go Back</Text>
    </Button>
    </View>
    </ImageBackground>
    </View>

  );
}
export default signup;
