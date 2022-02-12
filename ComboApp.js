import React, { useContext } from 'react';
import { AppContext } from './context/provider'

import Main from './screens/Main';
import RestaurantSelect from './components/restaurant/RestaurantSelect';
import ProjectSelect from './components/project/ProjectSelect';
import ComboSelect from './components/combo/ComboSelect';
import ConfirmOrder from './components/order/ConfirmOrder';
import DonationSuccess from './screens/CodeValidation';

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen } = state;

  if (currentScreen === 0) return <RestaurantSelect />
  if (currentScreen === 1) return <ProjectSelect />
  if (currentScreen === 2) return <ComboSelect />
  if (currentScreen === 3) return <ConfirmOrder />
  if (currentScreen === 4) return <DonationSuccess />

  return <Main />
}

export default ComboApp;
