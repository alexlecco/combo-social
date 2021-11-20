import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = _ => {
  return (
    <View>
      <Text style={styles.mainText}>Pantalla Principal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    color: 'white'
  }
})

export default Main;