import React from "react";
import { Card, Button } from "react-native-elements";
import { connect } from "react-redux";

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    const restaurant = this.props.restaurant;
  }

  handleSelectRestaurant(restaurant) {
    this.props.onSelectRestaurant(restaurant);
    this.props.switchCurrentScreen();
  }

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/restaurants%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`;
  }

  render() {
    const { restaurant } = this.props;

    return (
      <Card>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Image source={{ uri: this.getImage(restaurant.item.id) }}>
          <Button
            title="comer aquí"
            icon={{ name: "thumb-up", color: "white" }}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: -10,
              marginRight: -10,
              marginBottom: -10,
              marginTop: -10,
            }}
            onPress={() => this.handleSelectRestaurant(restaurant)}
          />
        </Card.Image>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchCurrentScreen: () => dispatch({ type: "SWITCH_CURRENT_SCREEN" }),
  };
}

export default connect(null, mapDispatchToProps)(RestaurantCard);
