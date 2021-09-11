import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from "react-native";
import { AppContext } from '../../context/provider'

const ConfirmOrder = () => {
  const [state] = useContext(AppContext);
  const { currentScreen, selectedRestaurant, selectedProject, selectedCombo } = state;

  return (
    <View style={styles.container}>
      <Text>¡Confirmá tu pedido!</Text>
      <Text>{selectedRestaurant.name}</Text>
      <Text>{selectedProject.name}</Text>
      <Text>{selectedCombo.name}</Text>
      <Text>{currentScreen}</Text>
      <View style={styles.buttons}>
        <Button title="Cancelar" />
        <Button title="Confirmar" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  }
});


export default ConfirmOrder
