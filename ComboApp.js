import React, { Component } from 'react';
import { StyleSheet, Text, YellowBox, View, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';

import RestaurantSelect from './components/restaurant/RestaurantSelect'
import ProjectSelect from './components/project/ProjectSelect'

class ComboApp extends Component {
  constructor(props) {
    super(props);
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
    if(this.props.currentScreen === 0) this.setState({currentScreen: 1})
    if(this.props.currentScreen === 1) this.setState({currentScreen: 2})
  }

  render() {
    const {currentScreen, selectedRestaurant, selectedProject} = this.props
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
          <Text>{this.props.selectedRestaurant.name}</Text>
          <Text>{this.props.selectedProject.name}</Text>

          <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
              <Text style={{ fontSize: 20 }}>Menos</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 60 }}>{this.props.counter}</Text>

            <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text style={{ fontSize: 20 }}>Más</Text>
            </TouchableOpacity>
          </View>
        </View>)
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        currentScreen: state.currentScreen,
        selectedRestaurant: state.selectedRestaurant,
        selectedProject: state.selectedProject
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        switchCurrentScreen: () => dispatch({ type: 'SWITCH_CURRENT_SCREEN' }),
        selectRestaurant: () => dispatch({ type: 'SELECT_RESTAURANT' }),
        selectProject: () => dispatch({ type: 'SELECT_PROJECT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComboApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
