import React from 'react'
import { StyleSheet, View, ScrollView, ListView, YellowBox } from 'react-native'
import { Header, Card, Button } from 'react-native-elements'

import { firebaseApp } from './firebase'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSourceRestaurants: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
    };

    this.restaurantsRef = firebaseApp.database().ref().child('restaurants')

    console.disableYellowBox = true;
    console.warn('YellowBox is disabled.');
    YellowBox.ignoreWarnings(['Warning: ...']);
    console.ignoredYellowBox = ['Setting a timer'];
  }

  componentDidMount() {
    this.listenForRestaurants(this.restaurantsRef)
  }

  listenForRestaurants(restaurantsRef) {
    restaurantsRef.on('value', (snap) => {
      let restaurants = [];
      snap.forEach((child) => {
        restaurants.push({
          addres: child.val().addres,
          id: child.val().id,
          name: child.val().name,
          _key: child.key,
        });
      });
      this.setState({
        dataSourceRestaurants: this.state.dataSourceRestaurants.cloneWithRows(restaurants)
      })
    });
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
          icon={{name: 'check'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='comer aquí' />
      </Card>
    );
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Header
            centerComponent={{ text: '¿Donde querés comer?', style: { color: '#ffffff' } }}
          />

          <ListView
            dataSource={this.state.dataSourceRestaurants}
            renderRow={(restaurant) => this.buildRestaurant(restaurant)}
          />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
