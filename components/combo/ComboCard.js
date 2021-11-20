import React, { useContext } from 'react';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';
import { AppContext } from '../../context/provider'

const ComboCard = ({ combo }) => {
  const [state, setState] = useContext(AppContext)

  const buttonStyle = RNEconstants.restaurantCard?.buttonStyle

  function handleSelectCombo(combo) {
    setState({
      ...state,
      currentScreen: state.currentScreen + 1,
      selectedCombo: combo.item,
    })
  }

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media`
  )

  return (
    <Card>
      <Card.Title>{combo.item.name}</Card.Title>
      <Card.Image source={{ uri: getImage(combo.item.id) }} />
      <Button
        title='elegir este combo'
        icon={{ name: 'food', color: 'white' }}
        buttonStyle={buttonStyle}
        onPress={() => handleSelectCombo(combo)}
      />
    </Card>
  );
}

export default ComboCard;
