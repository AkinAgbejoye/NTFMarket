import { View, Text, Image } from 'react-native';
import {SIZES, assets, FONTS, COLORS, SHADOWS } from '../constants';

const persons = [assets.person01, assets.person02, assets.person04];
export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  )
}

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image 
    source={imgUrl}
    resizeMode="contain"
    style={{
      width: 48,
      height: 48,
      marginLeft: index === 0 ? 0 : -SIZES.font, 
    }}
    />
  )
}

export const People = () => {
  return (
    <View style={{flexDirection: "row"}}>
      {persons.map((img, index) => (
        <ImageCmp imgUrl={img} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
}


export const EndDate = () => {
  return (
    <View 
    style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%",
    }}
    >
      <Text
      style={{
        fontFamily: FONTS.regular,
        color: COLORS.primary,
        fontSize: FONTS.medium,
      }}
      >Ending in
      </Text>
      
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      <People/>
      <EndDate/>
    </View>
  )
}




