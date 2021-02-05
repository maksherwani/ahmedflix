import {
  Platform,
  StyleSheet,
} from 'react-native';
import { colors,fonts } from '../Styles/index'
import {height,width} from '../helpers/constants'

export const Appstyles =StyleSheet.create({
  ButtontextStyle:{
    fontSize: 18,
    fontFamily: fonts.Lato_Bold,
    color:colors.white,
    alignSelf:'center',
  },
  backgroundVideo: {position: 'absolute',top: 0,bottom: 0,right: 0,left: 0},
  activityIndicator: {position: 'absolute',top: 0,bottom: 0,left: 0,right: 0,},
  silent: {position: 'absolute',marginTop:height/2.4,alignSelf:'center',fontSize:60,color:colors.white},
  headerStyle:
  {backgroundColor: colors.green, borderBottomWidth: 0,borderBottomColor:colors.white},
  homeheader:
  {fontSize: 50,fontWeight: "400", fontFamily: fonts.Remachine,color:colors.error},
})
