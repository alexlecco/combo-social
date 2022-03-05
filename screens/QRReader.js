import React, { useState, useEffect, useContext, } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner, } from 'expo-barcode-scanner';
import { AppContext, initialState } from '../src/context/provider';

const QRReader = _ => {
  const [state, setState] = useContext(AppContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Codigo de tipo: ${type} y datos: ${data} fueron escaneddos!`);
    // alert('Orden aprobada con éxito. Ya fue enviada a la cocina.');
  }

  if (hasPermission === null) (<Text> Solicitando permiso para la cámara </Text>);

  if (hasPermission === false) (<Text> No tienes acceso a la cámara </Text>);

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.buttonsContainer}>
        {
          scanned &&
            <Button
              title={'Escanear nuevamente'}
              onPress={() => setScanned(false)}
              style={{ color: 'red' }}
            />
        } 
        <Button
          title={'Volver a la pantalla principal'}
          onPress={() => setState(initialState)}
        />
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mainText: {
    color: 'black',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 100,
    height: 100,
  }
})

export default QRReader;
