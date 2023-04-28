import React, { useContext } from 'react';
import { Card, Button } from 'react-native-elements';
import RNEconstants from '../../constants/RNEconstants';

import { AppContext } from '../../../src/context/provider';
import { orderStatus } from '../../constants'

const OrderCard = ({ order, combo }) => {
  const [state, setState] = useContext(AppContext);

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    })
  };

  const getImage = (id) => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  const orderCardButton = _ => {
    if (order?.item.status === orderStatus.PENDING.status) return <Button title='Escanear código QR' onPress={handleQrScanButton} />
    if (order?.item.status === orderStatus.ACCEPTED.status) return <Button title='Entregar orden' onPress={() => {}} />
  }

  return(
    <Card>
      <Card.Title>{combo?.name}</Card.Title>
      <Card.Title>{`mesa: ${order?.item.table}`}</Card.Title>
      <Card.Title>{`estado: ${order?.item.status}`}</Card.Title>
      <Card.Image source={{ uri: getImage(combo?.id) }} />
      {orderCardButton()}
    </Card>
  );
};

export default OrderCard;
