import {Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';
import { SubInfo, NFTTitle, EthPrice } from './SubInfo';
import * as Facebook from 'expo-facebook';


// async function logIn() {
//   try {
//     await Facebook.initializeAsync({
//       appId: '682227712938522',
//     });
//     const { type, token, expirationDate, permissions, declinedPermissions } =
//       await Facebook.logInWithReadPermissionsAsync({
//         permissions: ['public_profile'],
//       });
//     if (type === 'success') {
//       // Get the user's name using Facebook's Graph API
//       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//     } else {
//       // type === 'cancel'
//     }
//   } catch ({ message }) {
//     alert(`Facebook Login Error: ${message}`);
//   }
// }

const NftCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
    <View style={{ width:"100%", height: 250}}>
      <Image  
      source={data.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
      }}
      />
   
      <CircleButton  imgUrl={assets.heart} right={10} top ={10}/>
      <SubInfo/>
    </View>
    <View style={{width:"100%", padding: SIZES.font}}>
         <NFTTitle
         title ={ data.name}
         subTitle ={data.creator}
         titleSize = {SIZES.large}
         subTitleSize = {SIZES.small}
         />
         <View style={{marginTop: SIZES.font, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
      <EthPrice price= {data.price}/>
      <RectButton
      minWidth={120}
      fontSize={SIZES.font}
      handlePress = {() => {navigation.navigate('Details',{data})}}
      />
      </View>
      </View>
      
    </View>
  )
}

export default NftCard