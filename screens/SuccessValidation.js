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

  //TODOx: implement share action
  const shareDonation = _ => {}

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}> Tu pedido fue validado </Text>
      <Text style={styles.text}> El cocinero recibió tu pedido </Text>
      <Text style={styles.text}> Solo esperá y te lo llevamos a la brevedad </Text>
      <Text style={styles.text}> Gracias por ayudar </Text>

      <View style={styles.buttonContainer}>
        <Button title='compartir en redes' onPress={shareDonation} />
        <Text style={styles.shareSubtitle}>*esta accion ayuda a difundir la iniciativa "Combo Social" 😉</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Volver a la pantalla principal' onPress={onReturnMainScreen} />
      </View>
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
  buttonContainer: {
    marginTop: 50,
  },
  shareSubtitle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 12,
  },
});

export default SuccessValidation;
