import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppContext, initialState } from '../src/context/provider'
import { Header } from 'react-native-elements';
import { ref, push } from "firebase/database";

import RNEconstants from '../src/constants/RNEconstants';
import DetailCard from '../src/components/order/DetailCard';
import database from '../firebase';

const ConfirmOrder = () => {
  const [state, setState] = useContext(AppContext);
  const {
    currentScreen,
    currentUser,
    selectedRestaurant,
    selectedProject,
    selectedCombo,
  } = state;
  const centerComponent = RNEconstants.ConfirmOrder?.centerComponent;

  const restartProcess = _ => setState({
    ...initialState,
    currentScreen: 0,
    currentUser: currentUser,
  });

  const saveOrderKeyAndRedirectTo = (orderKey, screenToRedirect) => setState({
    ...state,
    currentScreen: screenToRedirect,
    orderKey: orderKey,
  });

  const onConfirmOrder = _ => {
    const orderToPush = {
      selectedRestaurant: selectedRestaurant.id,
      selectedProject: selectedProject.id,
      selectedCombo: selectedCombo.id,
      table: 'a confirmar',
      status: 'pending',
    };

    const newOrderRef = push(ref(database, 'orders/'), orderToPush);

    saveOrderKeyAndRedirectTo(newOrderRef.key, 4);
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={centerComponent}
        rightComponent={{text: currentScreen.toString()}}
      />
      <View style={styles.title}>
        <Text> Detalle de la orden </Text>
      </View>
      <View style={styles.cards}>
        <DetailCard text={selectedRestaurant.name} type='restaurants' id={selectedRestaurant.id} />
        <DetailCard text={selectedCombo.name} type='combos' id={selectedCombo.id} />
        <DetailCard text={selectedProject.name} type='projects' id={selectedProject.id} />
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
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 100,
    borderWidth: 1,
    padding: 10,
  },
});

export default ConfirmOrder;
