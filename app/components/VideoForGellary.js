import Video from 'react-native-video';
import React, { useState } from 'react';

const VideoForGellary =(props)=> {
  const player = React.useRef(null);
  const [opacity, setOpacity] = useState(0);
  const onLoadStart = () => {
    setOpacity(1)
  }
  const onLoad = () => {
    setOpacity(0)
  }
  const onBuffer = ({isBuffering}) => {
    setOpacity(isBuffering ? 1 : 0)
  }
  return(
    <Video
    {...props}
    ref={player}
    onBuffer={onBuffer}
    onLoadStart={onLoadStart}
    onLoad={onLoad}
    source={{uri: props.video_url}}
    resizeMode="cover"
    rate={1.0}
    volume={0.0}
    paused={true}
    />
  );
}
export default VideoForGellary;
