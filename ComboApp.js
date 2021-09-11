import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { AppContext } from './context/provider'

import RestaurantSelect from "./components/restaurant/RestaurantSelect";
import ProjectSelect from "./components/project/ProjectSelect";
import ComboSelect from "./components/combo/ComboSelect";
import ConfirmOrder from "./components/order/ConfirmOrder";

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen } = state;

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
        <ConfirmOrder />
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
