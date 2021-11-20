import React, { useState, createContext } from 'react';

const initialState = {
  currentScreen: 1,
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
  )
}

export default ContextProvider;
export const AppContext = createContext();
