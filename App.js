import React from 'react'
import { YellowBox } from 'react-native'

import RestaurantSelect from './components/RestaurantSelect'
import ProjectSelect from './components/ProjectSelect'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelect: 0
    }

    console.disableYellowBox = true
    console.warn('YellowBox is disabled.')
    YellowBox.ignoreWarnings(['Warning: ...'])
    console.ignoredYellowBox = ['Setting a timer']
  }

  render() {
    const {currentSelect} = this.state;

    if(currentSelect === 0) return (<RestaurantSelect />)
    if(currentSelect === 1) return (<ProjectSelect />)
  }
}
