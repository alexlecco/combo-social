import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../../src/context/provider';
import database from '../../firebase';
import OrderCard from '../../src/components/order/OrderCard';
import RNEconstants from '../../src/constants/RNEconstants';

const WaiterView = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const [orders, setOrders] = useState([]);
  const [combos, setCombos] = useState([])
  const centerComponent = `${RNEconstants.waiterView?.headerTitle?.text} ${currentUser.username}`;

  useEffect(() => {
    const OrdersRef = ref(database, 'orders/');
    const CombosRef = ref(database, 'combos/');

    onValue(OrdersRef, snap => {
      let orders = [];
      snap.forEach((child) => {
        orders.push({
          selectedCombo: child.val().selectedCombo,
          selectedProject: child.val().selectedProject,
          selectedRestaurant: child.val().selectedRestaurant,
          table: child.val().table,
          status: child.val().status,
          id: child.key,
        });
      });
      setOrders(orders);
    });

    onValue(CombosRef, snap => {
      let combos = [];
      snap.forEach(child => {
        combos.push({
          id: child.key,
          name: child.val().name,
          price: child.val().price,
          restaurantId: child.val().restaurantId,
        });
      });
      setCombos(combos);
    });
  }, []);

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    })
  };

  const rollChangeButton = (
    <View style={{marginTop: 20}}>
      <Button
        title='rol'
        onPress={() => handleRollChangeButton()}
      />
    </View>
  );
  const handleRollChangeButton = () => {
    setState({
      ...state,
      currentScreen: 7,
    })
  };

  const buildOrder = order => {
    const combo = combos.find(combo => combo.id === order.item.selectedCombo)

    console.log("combo:::::::::::", combo)

    return <OrderCard order={order} combo={combo} />
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={orders}
            renderItem={order => buildOrder(order)}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title='Escanear código QR' onPress={handleQrScanButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 75,
  },
});

export default WaiterView;
