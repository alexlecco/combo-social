import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { colors, bgImages} from '../src/constants';

const imageURL = { uri: bgImages.bg1 };

const Login = _ => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={imageURL} resizeMode='cover' style={styles.imageCover}>
        <View />
        <View />
        <View />
        <View styles>
          <Button
            title='Ingresá con Google'
            onPress={() => alert('click')}
            type='clear'
            titleStyle={{ color: colors.white}}
            icon={{ name: 'google', color: colors.white, type:'zocial' }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageCover: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default Login;
