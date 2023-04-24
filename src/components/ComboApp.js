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
import QRReader from '../../screens/QRReader';

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen, currentUser } = state;

  // if (!!!currentUser) return <Login />

  if (currentScreen === 0) return <RestaurantSelect />
  if (currentScreen === 1) return <ComboSelect />
  if (currentScreen === 2) return <ProjectSelect />
  if (currentScreen === 3) return <ConfirmOrder />
  if (currentScreen === 4) return <CodeValidation />
  if (currentScreen === 5) return <SuccessValidation />
  if (currentScreen === 7) return <RollChange />
  if (currentScreen === 9) return <QRReader />

  return <RestaurantSelect />
}

export default ComboApp;
