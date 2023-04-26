import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../src/context/provider';
import database from '../firebase';
import RestaurantCard from '../src/components/restaurant/RestaurantCard';
import RNEconstants from '../src/constants/RNEconstants';

const RestaurantSelect = _ => {
  const [state, setState] = useContext(AppContext);
  const {currentUser} = state;
  const [restaurants, setRestaurants] = useState([]);
  const centerComponent = RNEconstants.restaurantSelect?.centerComponent;

  const rollChangeButton = (
    <Button
      title='rol'
      onPress={() => handleRollChangeButton()}
    />
  );
  const handleRollChangeButton = () => {
    setState({
      ...state,
      currentScreen: 7,
    })
  }

  useEffect(() => {
    const restaurantsRef = ref(database, 'restaurants/');

    onValue(restaurantsRef, snap => {
      let restaurants = [];
      snap.forEach((child) => {
        restaurants.push({
          address: child.val().address,
          id: child.val().id,
          name: child.val().name,
          _key: child.key,
        });
      });
      setRestaurants(restaurants);
    });
  }, []);

  const buildRestaurant = (restaurant) => (
    <RestaurantCard restaurant={restaurant} />
  );

  return(
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
        rightComponent={currentUser.username}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={restaurants}
            renderItem={(restaurant) => buildRestaurant(restaurant)}
          />
        </View>
      </ScrollView>
    </View> 
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default RestaurantSelect;
