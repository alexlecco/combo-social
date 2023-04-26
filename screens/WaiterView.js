import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, Button } from 'react-native-elements';

import { AppContext } from '../src/context/provider';
import database from '../firebase';
import OrderCard from '../src/components/order/OrderCard';
import RNEconstants from '../src/constants/RNEconstants';

const WaiterView = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const centerComponent = `${RNEconstants.waiterView?.headerTitle?.text} ${currentUser.username}`;

  useEffect(() => {
    
  }, []);

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    })
  };

  const rollChangeButton = (
    <Button
      title='rol'
      onPress={() => handleRollChangeButton()}
    />
  );
  const handleRollChangeButton = () => {
    setState({
      ...state,
      currentScreen: 7,
    })
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
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
