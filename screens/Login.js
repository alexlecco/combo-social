import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../src/constants/colors';

const Login = _ => {
  return (
    <View style={styles.screen}>
      <Button
        title='Ingresá con Google'
        onPress={() => alert('click')}
        type='clear'
        titleStyle={{ color: colors.googleBlueColor}}
        icon={{ name: 'google', color: colors.googleBlueColor, type:'zocial' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
