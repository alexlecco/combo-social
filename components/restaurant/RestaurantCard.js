import React from "react";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";
import RNEconstants from '../../constants/RNEconstants';

const RestaurantCard = ({ restaurant, onSelectRestaurant, switchCurrentScreen }) => {
  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle

  function handleSelectRestaurant(restaurant) {
    onSelectRestaurant(restaurant);
    switchCurrentScreen();
  }

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/restaurants%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  )

  const rneData = {

  }

  return(
    <Card>
      <Card.Title>{restaurant.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(restaurant.item.id) }} />
      <Button
        title="comer aquí"
        icon={{ name: "thumb-up", color: "white" }}
        buttonStyle={buttonStyle}
        onPress={() => handleSelectRestaurant(restaurant)}
      />
    </Card>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    switchCurrentScreen: () => dispatch({ type: "SWITCH_CURRENT_SCREEN" }),
  };
}

export default connect(null, mapDispatchToProps)(RestaurantCard);