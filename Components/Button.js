import {TouchableOpacity, Image, View, Text } from 'react-native'
import {COLORS, SIZES, SHADOWS, FONTS} from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
    style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: "absolute",
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...props,
    }}
    onPress={handlePress}
    >
   <Image 
   source={imgUrl}
   resizeMode="contain"
   style={{height:24, width:24}}
   />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
    style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props,
    }}
    onPress={handlePress}
    >
 <Text
 style={{
  color:COLORS.white,
  textAlign: 'center',
  fontSize: fontSize,
  fontFamily: FONTS.semiBold
 }}
 >Place a bid</Text>
    </TouchableOpacity>
  )
}

