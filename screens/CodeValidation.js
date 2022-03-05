import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { AppContext } from '../src/context/provider'

const CodeValidation = _ => {
  const [state, setState] = useContext(AppContext);

  const getImage = _ => 'https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/images%2Fqr-sample.png?alt=media&token=e625c887-4ddd-45fc-990d-1e069eea7ee5';
  const onReturnMainScreen = _ => setState({
    ...state,
    currentScreen: 0,
    selectedRestaurant: {},
    selectedProject: {},
    selectedCombo: {},
  });  

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}> Solo falta validar tu pedido </Text>
      <Text style={styles.text}> Por favor, pedile a un mozo que escanée este codigo </Text>
      <Image
        style={styles.image}
        source={{
          uri: getImage(),
        }}
      />
      <Button title='Volver a la pantalla principal' onPress={onReturnMainScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
})

export default CodeValidation;
