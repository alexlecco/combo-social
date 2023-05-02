import React, { useContext } from 'react';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider';
import currencyFormatter from '../../utils/currencyFormatter';

const ComboCard = ({ combo }) => {
  const [state, setState] = useContext(AppContext)
  const formattedPrice = currencyFormatter(combo?.item.price);
  const formattedDonation = currencyFormatter(combo?.item.donationAmount);
  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle

  const handleSelectCombo = (combo) => {
    setState({
      ...state,
      currentScreen: state.currentScreen + 1,
      selectedCombo: combo?.item,
    })
  };

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media`
  );

  return (
    <Card>
      <Card.Title>{combo?.item.name}</Card.Title>
      <Card.Title>{`pagando: ${formattedPrice}`}</Card.Title>
      <Card.Title>{`vas a aportar: ${formattedDonation}`}</Card.Title>
      <Card.Image source={{ uri: getImage(combo?.item.id) }} />
      <Button
        title='elegir este combo'
        icon={{ name: 'fastfood', color: 'white' }}
        buttonStyle={buttonStyle}
        onPress={() => handleSelectCombo(combo)}
      />
    </Card>
  );
};

export default ComboCard;
