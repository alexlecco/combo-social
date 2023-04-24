import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { initialState } from '../src/context/provider';
import { AppContext } from '../src/context/provider';

const RollChange = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const onReturnMainScreen = _ => setState({
    ...initialState,
    currentUser: currentUser
  });

  return (
    <View style={styles.screenContainer}>

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

export default RollChange;
