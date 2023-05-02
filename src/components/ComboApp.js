import React, { useContext } from 'react';
import { AppContext } from '../context/provider'

import Login from '../../screens/Login';
import Loading from '../../screens/Loading';
import RestaurantSelect from '../../screens/RestaurantSelect';
import ProjectSelect from '../../screens/ProjectSelect';
import ComboSelect from '../../screens/ComboSelect';
import ConfirmOrder from '../../screens/ConfirmOrder';
import CodeValidation from '../../screens/CodeValidation';
import SuccessValidation from '../../screens/SuccessValidation';
import RollChange from '../../screens/RollChange';
import WaiterView from '../../screens/waiter/WaiterView';
import OwnerView from '../../screens/owner/OwnerView';
import QRReader from '../../screens/waiter/QRReader';

// constants
import { rolls } from '../constants/index';

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen, currentUser } = state;

  // if (!!!currentUser) return <Login />

  if (currentUser.roll === rolls.DONATOR) {
    if (currentScreen === 0) return <RestaurantSelect />
    if (currentScreen === 1) return <ComboSelect />
    if (currentScreen === 2) return <ProjectSelect />
    if (currentScreen === 3) return <ConfirmOrder />
    if (currentScreen === 4) return <CodeValidation />
    if (currentScreen === 5) return <SuccessValidation />
    if (currentScreen === 7) return <RollChange />
  };

  if (currentUser.roll === rolls.WAITER) {
    if (currentScreen === 0) return <WaiterView />
    if (currentScreen === 9) return <QRReader />
    if (currentScreen === 7) return <RollChange />
  };

  if (currentUser.roll === rolls.OWNER) {
    if (currentScreen === 0) return <OwnerView />
    if (currentScreen === 7) return <RollChange />
  };

  return <RestaurantSelect />
};

export default ComboApp;
