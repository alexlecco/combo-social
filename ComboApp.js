import React, { useContext } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { AppContext } from './context/provider'

import RestaurantSelect from "./components/restaurant/RestaurantSelect";
import ProjectSelect from "./components/project/ProjectSelect";
import ComboSelect from "./components/combo/ComboSelect";

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen, selectedRestaurant, selectedProject, selectedCombo } = state;

  return(
      currentScreen === 0 ? (
        <RestaurantSelect />
      ) :
      currentScreen === 1 ? (
        <ProjectSelect />
      ) :
      currentScreen === 2 ? (
        <ComboSelect />
      ) :
      currentScreen === 3 &&
        <View style={styles.container}>
          <Text>{selectedRestaurant.name}</Text>
          <Text>{selectedProject.name}</Text>
          <Text>{selectedCombo.name}</Text>
          <Text>{currentScreen}</Text>
        </View>
  )
}

export default ComboApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
