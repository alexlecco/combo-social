import React, { useContext } from 'react';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider'

const OrderCard = (/*{ order }*/) => {
  const [state, setState] = useContext(AppContext);

  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle;

  // const handleSelectRestaurant = (order) => {
  //   setState({
  //     ...state,
  //     currentScreen: state.currentScreen + 1,
  //     selectedRestaurant: order.item,
  //   });
  // };

  // const getImage = (id) => (
  //   `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combo%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  // );

  const getImage = _ => (
    'https://www.recetasderechupete.com/wp-content/uploads/2021/06/Sushi-y-nigiris-variados-768x530.jpg'
  );

  return(
    <Card>
      <Card.Title>{"2 Sandwiches de milanesa + gaseosa de 1L"}</Card.Title>
      <Card.Title>{"mesa: 1"}</Card.Title>
      <Card.Title>{"estado: preparando"}</Card.Title>
      <Card.Image source={{ uri: getImage() }} />
      <Button
        title='entregar orden'
        buttonStyle={buttonStyle}
        onPress={() => {}}
      />
    </Card>
  );
};

export default OrderCard;
