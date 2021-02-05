import {View,Text} from 'react-native';
import { Content,H2} from 'native-base';
import React,{useLayoutEffect} from 'react';
import VideoPlayer from '../components/VideoPlayer'
import { Button} from 'native-base'
import { colors,Appstyles } from '../Styles/index'
import {height} from '../helpers/constants'
import {images} from '../../assets/index'
import GalleryVideo from '../components/GalleryVideo'
import { useHeaderHeight } from '@react-navigation/stack';
const videoList = (props) => {
  const headerHeight = useHeaderHeight();

  return (

    <View style={{backgroundColor:colors.black,flex:1}}>
    <Content>
    <View style={{marginTop:headerHeight - 30,flex:1,flexDirection:'row',flexWrap: "wrap"}}>
    {
      images.map((image,index)=>{
        return(
          <GalleryVideo
          index={index}
          key={index}
          onPress={()=>props.navigation.navigate('video')}
          uri={image}
          />
        )
      })
    }
    </View>
    </Content>
    </View>

  );
}
export default videoList;
