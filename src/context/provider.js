import React, { useState, createContext } from 'react';

const initialUsers = [{
  id: 'user01',
  roll: 'donator',
  username: 'alexlecco',
}, {
  id: 'user02',
  roll: 'waiter',
  username: 'alesuarez',
}, {
  id: 'user03',
  roll: 'owner',
  username: 'mariocelis',
}];

const initialState = {
  currentScreen: 0,
  currentUser: initialUsers[2],
  selectedRestaurant: {},
  selectedProject: {},
  selectedCombo: {},
};

const ContextProvider = ({children}) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
export const AppContext = createContext();

export { initialState, initialUsers };
