import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';
import { orderStatus } from '../../src/constants';

import { AppContext } from '../../src/context/provider';
import database from '../../firebase';
import OrderCard from '../../src/components/order/OrderCard';
import RNEconstants from '../../src/constants/RNEconstants';

const WaiterView = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const [orders, setOrders] = useState([]);
  const [combos, setCombos] = useState([]);
  const [projects, setProjects] = useState([]);
  const centerComponent = `${RNEconstants.waiterView?.headerTitle?.text} ${currentUser.username}`;

  useEffect(() => {
    const OrdersRef = ref(database, 'orders/');
    const CombosRef = ref(database, 'combos/');
    const ProjectsRef = ref(database, 'projects/');

    const pendingOrder = orderStatus.PENDING.status;
    const PayedOrder = orderStatus.PAYED.status;

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
      setOrders(orders.filter(order => order.status !== PayedOrder && order.status !== pendingOrder));
    });

    onValue(CombosRef, snap => {
      let combos = [];
      snap.forEach(child => {
        combos.push({
          name: child.val().name,
          price: child.val().price,
          donationAmount: child.val().donationAmount,
          restaurantId: child.val().restaurantId,
          id: child.key,
        });
      });
      setCombos(combos);
    });

    onValue(ProjectsRef, snap => {
      let projects = [];
      snap.forEach(child => {
        projects.push({
          id: child.val().id,
          description: child.val().description,
          goalValue: child.val().goalValue,
          currentValue: child.val().currentValue,
          name: child.val().name,
        });
      });
      setProjects(projects);
    });
  }, []);

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
    });
  };

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    });
  };

  const orderCardButton = _ => (
    <View style={{marginTop: 40}}>
      <Button title={orderStatus.PENDING.textButton} onPress={handleQrScanButton} />
    </View>
  );

  const buildOrder = order => {
    const combo = combos.find(combo => combo.id === order?.item.selectedCombo);
    const project = projects.find(project => project.id === order?.item.selectedProject);

    return <OrderCard order={order} combo={combo} project={project} />;
  };

  const buildOrdersList = _ => (
    orders.length === 0 ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> No hay ordenes por tomar </Text>
        {orderCardButton()}
      </View>
    ) : (
      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={orders}
            renderItem={order => buildOrder(order)}
          />
        </View>
      </ScrollView>
    )
  );

  return (
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
      />
      {buildOrdersList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default WaiterView;
