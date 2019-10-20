
import React from 'react';
import { Text, View,StyleSheet,Button,TextInput } from 'react-native';

export default function App() {
  return(
    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"stretch"}}>
      <View style={{width:50,height:50,backgroundColor:'powderblue',alignSelf:"center"}} />
      <View style={{width:50,height:50,backgroundColor:'skyblue'}} />
      <View style={{width:50,height:100,backgroundColor:'steelblue'}} />
    </View>
  );
}