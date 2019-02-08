import React from 'react'
import { StyleSheet, View, ScrollView, ListView } from 'react-native'
import { Header, Card, Button, Text } from 'react-native-elements'

import { firebaseApp } from '../firebase'

export default class RestaurantSelect extends React.Component {
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

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/restaurants%2F${id}.png?alt=media&token=84f5ccd9-506d-4940-a318-703169c32b60`
  }

  buildRestaurant(restaurant) {
    return(
      <Card
        title={restaurant.name}
        image={{uri: this.getImage(restaurant.id)}} >
        <Button
          icon={{name: 'thumb-up', color: "white"}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='comer aquí' />
      </Card>
    )
  }

  buildButton() {
    return(
      <Text
        onPress={() => this.props.onSwitchCurrentScreen()}
        style={{color: '#ffffff'}}>
          proyectos
      </Text>
    )
  }

  render() {
    const buttonProjects = this.buildButton()

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '¿Donde querés comer?', style: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' } }}
          rightComponent={buttonProjects}
        />

        <ScrollView>
          <ListView
            dataSource={this.state.dataSourceRestaurants}
            renderRow={(restaurant) => this.buildRestaurant(restaurant)}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
})
