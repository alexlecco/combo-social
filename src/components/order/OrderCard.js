import React from 'react';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';

const OrderCard = ({ order, combo }) => {
  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle;

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  return(
    <Card>
      <Card.Title>{combo?.name}</Card.Title>
      <Card.Title>{`mesa: ${order?.item.table}`}</Card.Title>
      <Card.Title>{`estado: ${order?.item.status}`}</Card.Title>
      <Card.Image source={{ uri: getImage(combo.id) }} />
      <Button
        title='entregar orden'
        buttonStyle={buttonStyle}
        onPress={() => {}}
      />
    </Card>
  );
};

export default OrderCard;
