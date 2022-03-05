import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header, Button, } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../src/context/provider';
import database from '../firebase';
import RestaurantCard from '../src/components/restaurant/RestaurantCard';
import RNEconstants from '../src/constants/RNEconstants';

const RestaurantSelect = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentScreen } = state;
  const [restaurants, setRestaurants] = useState([]);
  const centerComponent = RNEconstants.restaurantSelect?.centerComponent;
  const qrScanButton = (
    <Button
      title='scan'
      onPress={() => handleQrScanButton()}
    />
  );
  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
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
        leftComponent={qrScanButton}
        centerComponent={centerComponent}
        rightComponent={{text: currentScreen.toString()}}
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
