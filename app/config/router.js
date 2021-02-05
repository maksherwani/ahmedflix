import {video,auth,login,videoList,signup} from '../screens/index';
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors,Appstyles } from '../Styles/index'
const Stack = createStackNavigator();

export const AppNavigation = ({ navigation, route }) => {

  return (
    <Stack.Navigator initialRouteName="auth"
    screenOptions={{
      headerTitle:'ahmedflix',
      headerTitleAlign:'center',
      headerStyle: Appstyles.headerStyle,
      headerTitleStyle:Appstyles.homeheader,
      headerTintColor:colors.error,
      headerTransparent:true,
      headerBackTitle:null,
      gestureEnabled:true,
    }}
    >
    <Stack.Screen name="auth" component={auth} options={({ navigation, route }) => ({headerShown:false})}/>
    <Stack.Screen name="login" component={login} options={{headerLeft:false,gestureEnabled:false}}/>
    <Stack.Screen name="signup" component={signup} options={{headerLeft:false,gestureEnabled:false}}/>
    <Stack.Screen name="video" component={video} options={{headerLeft:false,gestureEnabled:false}}/>
    <Stack.Screen name="videoList" component={videoList} />

    </Stack.Navigator>
  );

}
