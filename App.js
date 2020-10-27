import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} placeholder="Tapez votre nom "/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput:{
    marginLeft: 5,
    marginRight:5,
    height:50,
    borderColor: '#000000',
    borderWidth:1,
    paddingLeft:5
  }
});
