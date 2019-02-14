import React from 'react'
import { View, Text, YellowBox, StyleSheet } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ComboApp from './ComboApp'

const initialState = {
  counter: 0,
  currentScreen: 0,
  selectedRestaurant: {},
  selectedProject: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1}
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1}
    case 'SWITCH_CURRENT_SCREEN':
      if(state.currentScreen === 0) return {currentScreen: 1}
      if(state.currentScreen === 1) return {currentScreen: 2}
    case 'SELECT_RESTAURANT':
      return {selectedRestaurant: state.selectedRestaurant}
    case 'SELECT_PROJECT':
      return {selectedProject: state.selectedProject}
  }
  return state
}

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ComboApp />
      </Provider>
    );
  }
}
