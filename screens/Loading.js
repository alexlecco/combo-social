//import liraries
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../src/constants/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.googleBlueColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
