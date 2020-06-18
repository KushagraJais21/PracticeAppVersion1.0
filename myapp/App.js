import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Display from "./components/display"

const Increase = () => {
  return(
    <TouchableOpacity>
      <Text>
        Touch to increase
      </Text> 
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Display style={styles.display}/>
      <Increase/>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {

  },
  container: {
    flex: 1,
    backgroundColor: '#bce5c6',
    paddingTop: 30
  },
  text: {
    color: "white"
  }
});
