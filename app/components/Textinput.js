import {ActivityIndicator,TextInput,ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { colors,Appstyles } from '../Styles/index'
import {width,height} from '../helpers/constants'

export const Textinput =(props)=>
{
  const [status,setStatus] = useState('')
  const {text} = props;

  const onChangeText = (text)=>
  {
    setStatus(text)
  }
  return(
    <TextInput
    value={status}
    style={{borderRadius:10,borderWidth:2,borderColor:colors.error,backgroundColor:'transparent',width:width - 40,height:40,margin:20,color:colors.white,padding:10}}
    onChangeText = {onChangeText}
    placeholder={props.placeholderText}
    placeholderTextColor={colors.lightgr}
    secureTextEntry={props.secureTextEntry}
    />
  )
}
