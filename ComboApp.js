import React, { useContext } from "react";
import { AppContext } from './context/provider'

import Main from "./screens/Main";
import RestaurantSelect from "./components/restaurant/RestaurantSelect";
import ProjectSelect from "./components/project/ProjectSelect";
import ComboSelect from "./components/combo/ComboSelect";
import ConfirmOrder from "./components/order/ConfirmOrder";

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen } = state;

  if (currentScreen === 0) return <RestaurantSelect />
  if (currentScreen === 1) return <ProjectSelect />
  if (currentScreen === 2) return <ComboSelect />
  if (currentScreen === 3) return <ConfirmOrder />

  return <Main />
}

export default ComboApp;