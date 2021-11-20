import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppContext } from '../../context/provider'
import { Header } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';

const ConfirmOrder = () => {
  const [state, setState] = useContext(AppContext);
  const { currentScreen, selectedRestaurant, selectedProject, selectedCombo } = state;
  const centerComponent = RNEconstants.ConfirmOrder?.centerComponent;

  const restartProcess = _ => setState({
    ...state,
    currentScreen: 0,
    selectedRestaurant: {},
    selectedProject: {},
    selectedCombo: {},
  })

  return (
    <View style={styles.container}>
      <Header
        centerComponent={centerComponent}
        rightComponent={{text: currentScreen.toString()}}
      />
      <View style={styles.title}>
        <Text> Detalle </Text>
      </View>
      <View style={styles.cards}>
        <Text style={styles.cardInfo}>{selectedRestaurant.name}</Text>
        <Text style={styles.cardInfo}>{selectedProject.name}</Text>
        <Text style={styles.cardInfo}>{selectedCombo.name}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title='Cancelar' onPress={restartProcess} />
        <Button title='Confirmar' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cards: {
    flex: 4,
    backgroundColor: 'darkorange',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardInfo: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 5,
  },
});

export default ConfirmOrder
