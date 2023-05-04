import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { update, ref, getDatabase, } from 'firebase/database';
import { AppContext } from '../../../src/context/provider';
import { orderStatus } from '../../constants';
import currencyFormatter from '../../utils/currencyFormatter';
import { rolls } from '../../../src/constants/index';

const OrderCard = ({ order, combo, project }) => {
  const [state, setState] = useContext(AppContext);
  const {currentUser} = state;
  const formattedPrice = currencyFormatter(combo?.price);

  const isWaiterUser = currentUser.roll === rolls.WAITER;
  const isCookUser = currentUser.roll === rolls.COOK;
  const isPendingOrder = order?.item.status === orderStatus.PENDING.status;
  const isAcceptedOrder = order?.item.status === orderStatus.ACCEPTED.status;
  const isDeliveredOrder = order?.item.status === orderStatus.DELIVERED.status;

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
  };

  const getImage = id => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/combos%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  // TODOx: refactor this function
  const orderCardButton = _ => {
    if (isPendingOrder && isWaiterUser) {
      return <Button title={orderStatus.PENDING.textButton} onPress={handleQrScanButton} />
    }

    if (isAcceptedOrder && isWaiterUser) {
      return <Button title={orderStatus.ACCEPTED.textButton} onPress={changeOrderState} />
    }

    if (isDeliveredOrder && isWaiterUser) {
      return <Button title={orderStatus.DELIVERED.textButton} onPress={finishOrder} />
    }
  };

  const uppercaseStatus = order?.item.status.toUpperCase();

  const getSpanishStatus = _ => {
    if (isPendingOrder) return orderStatus.PENDING.text
    if (isAcceptedOrder) return orderStatus.ACCEPTED.text
    if (isDeliveredOrder) return orderStatus.DELIVERED.text
  };

  return(
    <View style={{backgroundColor: orderStatus[uppercaseStatus]?.color, paddingBottom: 20}}>
      <Card>
        <Card.Title style={isCookUser && {fontSize: 30, marginLeft: 20, marginRight: 20}}>{combo?.name}</Card.Title>
        <View style={[styles.orderDetail, isCookUser && {marginLeft: 30, marginRight: 30}]}>
          <Text>{`mesa: ${order?.item.table}`}</Text>
          <Text>{`estado: ${getSpanishStatus()}`}</Text>
          <Text>{`precio: ${formattedPrice}`}</Text>
        </View>
        {isWaiterUser && <Card.Image source={{ uri: getImage(combo?.id) }} />}
        {orderCardButton()}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  orderDetail: {
    margin: 20,
  },
});

export default OrderCard;
