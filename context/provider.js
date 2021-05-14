import React, { useState, createContext } from 'react';

const initialState = {
  currentScreen: 0,
  selectedRestaurant: {},
  selectedProject: {},
};

const ContextProvider = props => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;
export const AppContext = createContext();