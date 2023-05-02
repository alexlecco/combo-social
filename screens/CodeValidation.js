import React, { useState, useContext, useEffect, } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { AppContext, initialState } from '../src/context/provider'
import { ref, onValue, getDatabase, } from 'firebase/database';

const CodeValidation = _ => {
  const [state, setState] = useContext(AppContext);
  const { orderKey, currentUser } = state;
  const [status, setStatus] = useState();
  const docRef = `https://combo-social.firebaseio.com/orders/${orderKey}`;

  useEffect(() => {
    if (status === 'accepted') {
      setState({
        ...state,
        currentScreen: 5,
      });
    };
  }, [status]);

  useEffect(() => {
    const db = getDatabase();
    const reference = ref(db, 'orders/' + orderKey);
    onValue(reference, snap => {
      const status = snap.val().status;
      setStatus(status);
    });
  }, []);

  const onReturnMainScreen = _ => setState({
    ...initialState,
    currentScreen: 0,
    currentUser: currentUser,
  });

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleText}> Solo falta validar tu pedido </Text>
      <Text style={styles.text}> Por favor, pedile a un mozo que escanée este codigo </Text>

      <SvgQRCode value={docRef} />

      <View style={{ marginTop: 75 }}>
        <Button title='Volver a la pantalla principal' onPress={onReturnMainScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    marginBottom: 75,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});

export default CodeValidation;
