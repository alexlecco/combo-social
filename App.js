import React from 'react'
import { View, Text, YellowBox, StyleSheet } from 'react-native'

import RestaurantSelect from './components/restaurant/RestaurantSelect'
import ProjectSelect from './components/project/ProjectSelect'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      selectedRestaurant: {},
      selectedProject: {}
    }
    switchCurrentScreen = this.switchCurrentScreen.bind(this)
    selectRestaurant = this.selectRestaurant.bind(this)
    selectProject = this.selectProject.bind(this)

    console.disableYellowBox = true
    console.warn('YellowBox is disabled.')
    YellowBox.ignoreWarnings(['Warning: ...'])
    console.ignoredYellowBox = ['Setting a timer']
  }

  selectRestaurant(restaurant) {
    this.setState({selectedRestaurant: restaurant})
  }

  selectProject(project) {
    this.setState({selectedProject: project})
  }

  switchCurrentScreen() {
    if(this.state.currentScreen === 0) this.setState({currentScreen: 1})
    if(this.state.currentScreen === 1) this.setState({currentScreen: 2})
  }

  render() {
    const {currentScreen, selectedRestaurant, selectedProject} = this.state
    const switchCurrentScreen = this.switchCurrentScreen
    const selectRestaurant = this.selectRestaurant
    const selectProject = this.selectProject

    if(currentScreen === 0)
      return(<RestaurantSelect onSwitchCurrentScreen={this.switchCurrentScreen.bind(this)}
                               onSelectRestaurant={this.selectRestaurant.bind(this)}
                               selectedRestaurant={selectedRestaurant} />)

    if(currentScreen === 1)
      return(<ProjectSelect onSwitchCurrentScreen={this.switchCurrentScreen.bind(this)}
                            onSelectProject={this.selectProject.bind(this)}
                            selectedProject={selectedProject} />)
    if(currentScreen === 2)
      return(
        <View style={styles.container}>
          <Text>{this.state.selectedRestaurant.name}</Text>
          <Text>{this.state.selectedProject.name}</Text>
        </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
