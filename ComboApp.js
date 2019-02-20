import React, { Component } from 'react';
import { StyleSheet, Text, YellowBox, View, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';

import RestaurantSelect from './components/restaurant/RestaurantSelect'
import ProjectSelect from './components/project/ProjectSelect'

class ComboApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      selectedRestaurant: {},
      selectedProject: {}
    }
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

  render() {
    const {selectedRestaurant, selectedProject} = this.state
    const {currentScreen} = this.props

    const selectRestaurant = this.selectRestaurant
    const selectProject = this.selectProject

    if(currentScreen === 0)
      return(<RestaurantSelect onSelectRestaurant={this.selectRestaurant.bind(this)}
                               selectedRestaurant={selectedRestaurant} />)

    if(currentScreen === 1)
      return(<ProjectSelect onSelectProject={this.selectProject.bind(this)}
                            selectedProject={selectedProject} />)

    if(currentScreen === 2)
      return(
        <View style={styles.container}>
          <Text>{this.state.selectedRestaurant.name}</Text>
          <Text>{this.state.selectedProject.name}</Text>
          <Text>{this.props.currentScreen}</Text>
        </View>)
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        currentScreen: state.currentScreen
    }
}

export default connect(mapStateToProps, null)(ComboApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
