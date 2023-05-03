import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider';

const RestaurantCard = ({ restaurant }) => {
  const [state, setState] = useContext(AppContext);
  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle;

  const handleSelectRestaurant = (restaurant) => {
    setState({
      ...state,
      currentScreen: state.currentScreen + 1,
      selectedRestaurant: restaurant?.item,
    });
  };

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/restaurants%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  return(
    <Card>
      <Card.Title>{restaurant?.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(restaurant?.item.id) }} />
      <View style={styles.addressContainer}>
        <Card.Title>{restaurant?.item.address}</Card.Title>
      </View>
      <Button
        title='comer aquí'
        icon={{ name: 'thumb-up', color: 'white' }}
        buttonStyle={buttonStyle}
        onPress={() => handleSelectRestaurant(restaurant)}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default RestaurantCard;
