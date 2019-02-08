import React from 'react'
import { YellowBox } from 'react-native'

import RestaurantSelect from './components/RestaurantSelect'
import ProjectSelect from './components/ProjectSelect'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0
    }
    switchCurrentScreen = this.switchCurrentScreen.bind(this);

    console.disableYellowBox = true
    console.warn('YellowBox is disabled.')
    YellowBox.ignoreWarnings(['Warning: ...'])
    console.ignoredYellowBox = ['Setting a timer']
  }

  switchCurrentScreen() {
    this.state.currentScreen === 0 ? this.setState({currentScreen: 1}) : this.setState({currentScreen: 0})
  }

  render() {
    const {currentScreen} = this.state
    let switchCurrentScreen = this.switchCurrentScreen

    if(currentScreen === 0) return (<RestaurantSelect onSwitchCurrentScreen={this.switchCurrentScreen.bind(this)} />)
    if(currentScreen === 1) return (<ProjectSelect onSwitchCurrentScreen={this.switchCurrentScreen.bind(this)} />)
  }
}
