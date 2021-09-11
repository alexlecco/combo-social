import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import ContextProvider from './context/provider';
import ComboApp from "./ComboApp";

const App = _ => (
  <View style={styles.container}>
    <ContextProvider>
      <ComboApp />
    </ContextProvider>
    <StatusBar style="auto" />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
