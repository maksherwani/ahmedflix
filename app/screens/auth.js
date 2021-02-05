import {View,Text} from 'react-native';
import React from 'react';
import {Fullimage} from '../components/Fullimage'

const auth = (props) => {
  return (
    <Fullimage
    onPress={()=>props.navigation.navigate('login')}
    onPresssignup={()=>props.navigation.navigate('signup')}
    />
  );
}
export default auth;
