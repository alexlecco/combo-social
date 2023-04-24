import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { AppContext } from '../src/context/provider';

const WaiterView = _ => {
  const [state, setState] = useContext(AppContext);

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    })
  }

  return (
    <View style={styles.screenContainer}>

      <View style={{marginTop: 100}}>
        <Button title='Escanear código QR' onPress={handleQrScanButton} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WaiterView;
