import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { initialState, initialUsers } from '../src/context/provider';
import { AppContext } from '../src/context/provider';

// constants
import { rolls } from '../src/constants/index';

const RollChange = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const onReturnMainScreen = _ => setState({
    ...initialState,
    currentUser: currentUser
  });
  const changeRoll = roll => setState({
    ...initialState,
    currentUser: initialUsers.find(user => user.roll === roll),
    currentScreen: 0,
  });

  return (
    <View style={styles.screenContainer}>

      <View style={styles.buttonContainer}>
        <Button title='Donador' onPress={() => changeRoll(rolls.DONATOR)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Mozo' onPress={() => changeRoll(rolls.WAITER)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Dueño' onPress={() => changeRoll(rolls.OWNER)} />
      </View>

      <View style={{marginTop: 100}}>
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
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  }
})

export default RollChange;
