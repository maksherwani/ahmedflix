import {ActivityIndicator,TouchableOpacity} from 'react-native';
import {Icon } from 'native-base';
import Video from 'react-native-video';
import { colors,Appstyles } from '../Styles/index'
import React, { useState } from 'react';
import { withNavigationFocus } from '@react-navigation/compat';
import { useIsFocused } from '@react-navigation/native';

const VideoPlayer = React.forwardRef((props,ref) =>
{
  const isFocused = useIsFocused();
  const [opacity, setOpacity] = useState(0);
  const [videoPaused, setVideoPaused] = useState(false);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState('');

  React.useEffect(() => {
    if(!isFocused)
    {
      setVolume(0)
      setVideoPaused(true)
    }
  }, [isFocused]);

  const onLoadStart = () => {
    setOpacity(1)
  }
  const onLoad = ({duration}) => {
    setOpacity(0)
    setDuration(duration)
  }
  const onBuffer = ({isBuffering}) => {
    setOpacity(isBuffering ? 1 : 0)
  }
  const PlayThisVideo = (pause) =>  {
    setVideoPaused(pause)
  }
  const togglevolume = ()=>
  {
    if(volume === 0) setVolume(1)
    else if(volume === 1) setVolume(0)
    setVideoPaused(!videoPaused)
  }
  const onEndVideo = ()=>
  {
    setVideoPaused(false)
    player.seek(0)
  }
  return(
    <TouchableOpacity activeOpacity={1} onPress={togglevolume} style={{backgroundColor:colors.black, flex: 1}}>
    <Video
    ref={(ref) => {  player = ref}}
    onBuffer={onBuffer}
    onLoadStart={onLoadStart}
    onLoad={onLoad}
    onEnd={onEndVideo}
    source={{uri: props.video_url}}
    resizeMode="contain"
    rate={1.0}
    volume={volume}
    repeat={true}
    paused={videoPaused}
    poster={props.video_url}
    style={Appstyles.backgroundVideo}
    ignoreSilentSwitch={"obey"}
    playWhenInactive={false}
    playInBackground={false}
    />
    <ActivityIndicator animating size="large" color={colors.white}
    style={[Appstyles.activityIndicator, {opacity: opacity}]}/>
    {videoPaused && <Icon name={"play"} style={Appstyles.silent}/>}
    </TouchableOpacity>
  );
})


export default withNavigationFocus(VideoPlayer);
