import React from 'react'
import { YellowBox } from 'react-native'

import RestaurantSelect from './components/RestaurantSelect'
import ProjectSelect from './components/ProjectSelect'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    console.disableYellowBox = true
    console.warn('YellowBox is disabled.')
    YellowBox.ignoreWarnings(['Warning: ...'])
    console.ignoredYellowBox = ['Setting a timer']
  }

  render() {
    return (
      <ProjectSelect />
    );
  }
}
