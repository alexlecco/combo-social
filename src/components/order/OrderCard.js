import React, { useContext } from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { update, ref, getDatabase, } from 'firebase/database';

import { AppContext } from '../../../src/context/provider';
import { orderStatus } from '../../constants';

const OrderCard = ({ order, combo, project }) => {
  const [state, setState] = useContext(AppContext);

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    });
  };

  const changeOrderState = _ => {
    const orderRef = `/orders/${order?.item.id}`;
    const db = getDatabase();
    const updates = {};
    updates[`${orderRef}/status`] = orderStatus.DELIVERED.status;

    return update(ref(db), updates);
  };

  const finishOrder = _ => {
    const projectRef = `/projects/${order?.item.selectedProject}`;
    const orderRef = `/orders/${order?.item.id}`;

    const db = getDatabase();
    const updates = {};
    updates[`${projectRef}/currentValue`] = project.currentValue + combo.donationAmount;
    updates[`${orderRef}/status`] = orderStatus.PAYED.status;

    return update(ref(db), updates);
  }

  const getImage = id => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  const orderCardButton = _ => {
    if (order?.item.status === orderStatus.PENDING.status) return <Button title={orderStatus.PENDING.textButton} onPress={handleQrScanButton} />
    if (order?.item.status === orderStatus.ACCEPTED.status) return <Button title={orderStatus.ACCEPTED.textButton} onPress={changeOrderState} />
    if (order?.item.status === orderStatus.DELIVERED.status) return <Button title={orderStatus.DELIVERED.textButton} onPress={finishOrder} />
  };

  const uppercaseStatus = order?.item.status.toUpperCase();

  const getSpanishStatus = _ => {
    if (order?.item.status === orderStatus.PENDING.status) return orderStatus.PENDING.text
    if (order?.item.status === orderStatus.ACCEPTED.status) return orderStatus.ACCEPTED.text
    if (order?.item.status === orderStatus.DELIVERED.status) return orderStatus.DELIVERED.text
  };

  return(
    <View style={{backgroundColor: orderStatus[uppercaseStatus]?.color, paddingBottom: 20}}>
      <Card>
        <Card.Title>{combo?.name}</Card.Title>
        <Card.Title>{`mesa: ${order?.item.table}`}</Card.Title>
        <Card.Title>{`estado: ${getSpanishStatus()}`}</Card.Title>
        <Card.Image source={{ uri: getImage(combo?.id) }} />
        {orderCardButton()}
      </Card>
    </View>
  );
};

export default OrderCard;
