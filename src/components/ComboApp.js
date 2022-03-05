import React, { useContext } from 'react';
import { AppContext } from '../context/provider'

import Main from '../../screens/Main';
import RestaurantSelect from '../../screens/RestaurantSelect';
import ProjectSelect from '../../screens/ProjectSelect';
import ComboSelect from '../../screens/ComboSelect';
import ConfirmOrder from '../../screens/ConfirmOrder';
import CodeValidation from '../../screens/CodeValidation';
import QRReader from '../../screens/QRReader';

const ComboApp = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen } = state;

  if (currentScreen === 0) return <RestaurantSelect />
  if (currentScreen === 1) return <ProjectSelect />
  if (currentScreen === 2) return <ComboSelect />
  if (currentScreen === 3) return <ConfirmOrder />
  if (currentScreen === 4) return <CodeValidation />
  if (currentScreen === 9) return <QRReader />

  return <Main />
}

export default ComboApp;
