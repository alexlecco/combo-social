import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppContext } from '../../context/provider'
import { Header } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import DetailCard from './DetailCard';
import firebaseApp from '../../firebase';

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
  });

  const saveOrder = _ => {
    firebaseApp.database().ref().child('orders').push({
      selectedRestaurant: state.selectedRestaurant,
      selectedProject: state.selectedProject,
      selectedCombo: state.selectedCombo,
      status: 'pendent',
    }).key;
  };

  const onConfirmOrder = _ => {
    saveOrder();
    restartProcess();
  };

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
        <DetailCard text={selectedProject.name} type='projects' id={selectedProject.id} />
        <DetailCard text={selectedRestaurant.name} type='restaurants' id={selectedRestaurant.id} />
        <DetailCard text={selectedCombo.name} type='combos' id={selectedCombo.id} />
      </View>
      <View style={styles.buttons}>
        <Button title='Cancelar' onPress={restartProcess} />
        <Button title='Confirmar' onPress={onConfirmOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cards: {
    flex: 4,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  }
});

export default ConfirmOrder;
