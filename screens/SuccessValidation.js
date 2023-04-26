import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { initialState } from '../src/context/provider';
import { AppContext } from '../src/context/provider';

const SuccessValidation = _ => {
  const [state, setState] = useContext(AppContext);
  const {currentUser} = state;
  const onReturnMainScreen = _ => setState({
    ...initialState,
    currentScreen: 0,
    currentUser: currentUser,
  })

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}> Tu pedido fue validado </Text>
      <Text style={styles.text}> El cocinero recibió tu pedido </Text>
      <Text style={styles.text}> Solo esperá y te lo vamos a traer a la brevedad </Text>
      <Text style={styles.text}> Gracias por ayudar </Text>

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
})

export default SuccessValidation;
