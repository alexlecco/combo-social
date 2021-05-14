import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";
import ComboApp from "./ComboApp";

const initialState = {
  currentScreen: 0,
  selectedRestaurant: {},
  selectedProject: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_CURRENT_SCREEN":
      if (state.currentScreen === 0) return { currentScreen: 1 };
      if (state.currentScreen === 1) return { currentScreen: 2 };
    case "SELECT_RESTAURANT":
      return { selectedRestaurant: state.selectedRestaurant };
    case "SELECT_PROJECT":
      return { selectedProject: state.selectedProject };
  }
  return state;
};

const store = createStore(reducer);

const App = () => (
  <View style={styles.container}>
    <Provider store={store}>
      <ComboApp />
    </Provider>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;