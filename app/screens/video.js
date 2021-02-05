import {View,Text} from 'react-native';
import { Content,H2} from 'native-base';
import React,{useLayoutEffect} from 'react';
import VideoPlayer from '../components/VideoPlayer'
import { Button} from 'native-base'
import { colors,Appstyles } from '../Styles/index'
import {height} from '../helpers/constants'

const video = (props) => {
  return (
    <View style={{backgroundColor:colors.black,flex:1}}>
    <VideoPlayer video_url={'https://unicornflix-dev-output-jrtffp40.s3-us-west-2.amazonaws.com/99c18ac4-c346-4a5e-b587-203e8fd94f7d/99c18ac4-c346-4a5e-b587-203e8fd94f7d.m3u8'} />
    <Button block success onPress={()=>props.navigation.navigate('videoList')}    style={{backgroundColor:colors.error,elevation:0,borderRadius:8, height:40,margin:20,marginBottom:height/14}}>
    <Text style={Appstyles.ButtontextStyle}>Go Back</Text>
    </Button>
    </View>
  );
}
export default video;
