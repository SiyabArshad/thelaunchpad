import React, { useEffect } from 'react';
import {

  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Text,
  
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
export default function Shops({navigation}) {
  const isFocused = useIsFocused();
  useEffect(() => {
    if(isFocused)
    {
      Linking.openURL('https://thelaunchpad.store/');
      navigation.navigate('HOME')
    }
    
  },[isFocused,navigation]);

  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <TouchableOpacity>
        <Text>Go to Shop</Text>
      </TouchableOpacity>
    </View>
  );
}
