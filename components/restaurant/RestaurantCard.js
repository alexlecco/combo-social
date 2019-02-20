import React from 'react'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux';

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    const restaurant = this.props.restaurant;
  }

  handleSelectRestaurant(restaurant) {
    this.props.onSelectRestaurant(restaurant)
    this.props.switchCurrentScreen()
  }

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/restaurants%2F${id}.png?alt=media&token=84f5ccd9-506d-4940-a318-703169c32b60`
  }

  render() {
    const {restaurant} = this.props

    return(
      <Card title={restaurant.name}
            image={{uri: this.getImage(restaurant.id)}} >
          <Button
            title='comer aquí'
            icon={{name: 'thumb-up', color: "white"}}
            buttonStyle={{borderRadius: 0, marginLeft: -10, marginRight: -10, marginBottom: -10, marginTop: -10}}
            onPress={() => this.handleSelectRestaurant(restaurant)} />
      </Card>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        switchCurrentScreen: () => dispatch({ type: 'SWITCH_CURRENT_SCREEN' })
    }
}

export default connect(null, mapDispatchToProps)(RestaurantCard)
