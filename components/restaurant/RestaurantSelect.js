import React from 'react'
import { StyleSheet, View, ScrollView, ListView } from 'react-native'
import { Header, Card, Button, Text } from 'react-native-elements'
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase'
import RestaurantCard from './RestaurantCard'

class RestaurantSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSourceRestaurants: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
    }

    this.restaurantsRef = firebaseApp.database().ref().child('restaurants')
  }

  componentDidMount() {
    this.listenForRestaurants(this.restaurantsRef)
  }

  listenForRestaurants(restaurantsRef) {
    restaurantsRef.on('value', (snap) => {
      let restaurants = []
      snap.forEach((child) => {
        restaurants.push({
          address: child.val().address,
          id: child.val().id,
          name: child.val().name,
          _key: child.key,
        })
      })
      this.setState({
        dataSourceRestaurants: this.state.dataSourceRestaurants.cloneWithRows(restaurants)
      })
    })
  }

  buildRestaurant(restaurant) {
    return(
      <RestaurantCard
        restaurant={restaurant}
        onSelectRestaurant={this.props.onSelectRestaurant} />
    )
  }

  render() {
    const { currentScreen } = this.props

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '¿Donde querés comer?', style: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' } }}
          rightComponent={{ text: currentScreen.toString() , style: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' } }}
        />

        <ScrollView>
          <View style={{paddingBottom: 15}}>
            <ListView
              dataSource={this.state.dataSourceRestaurants}
              renderRow={(restaurant) => this.buildRestaurant(restaurant)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        currentScreen: state.currentScreen
    }
}

export default connect(mapStateToProps, null)(RestaurantSelect)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
})
