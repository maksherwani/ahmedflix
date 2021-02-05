import React  from 'react';
import PropTypes from 'prop-types';
import { Button,Icon,Text } from 'native-base';
import { colors,fonts } from '../Styles/index'
import {width} from '../helpers/constants'
import FastImage from 'react-native-fast-image'

const GalleryVideo =(props)=> {
  const { uri, index, onPress } = props;
  return (
    <Button
    onPress={props.onPress}
    style={[
      {justifyContent:'center'},
      {borderRadius: 0},
      {height: width / 2},
      {width: width / 3},
      {marginBottom:1},
      {borderWidth:0.5},
      {borderColor:colors.white},
      {backgroundColor:colors.mattransperency}
    ]}>
    <FastImage
    source={uri}
    style={[
      {opacity:0.6},
      {flex:1},
      {height: width / 2},
      {width: width / 3},
      {backgroundColor:colors.mattransperency}
    ]}
    />
    <Icon name={"play"} style={{color:colors.white,position:'absolute',}}/>
    <Text style={{color:colors.white,position:'absolute',left:0,bottom:0,fontSize:13,fontFamily:fonts.Lato_Regular}}>Trending # {props.index + 1}</Text>
    </Button>
  );
}
GalleryVideo.propTypes = {
  uri: PropTypes.number,
  index: PropTypes.number,
  onPress: PropTypes.func,
  def: PropTypes.string,
};
export default GalleryVideo;
