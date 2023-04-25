import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Button, } from 'react-native-elements';
import { AppContext } from '../src/context/provider';
import RNEconstants from '../src/constants/RNEconstants';

const WaiterView = _ => {
  const [state, setState] = useContext(AppContext);
  const { currentUser } = state;
  const centerComponent = `${RNEconstants.waiterView?.headerTitle?.text} ${currentUser.username}`;

  const handleQrScanButton = () => {
    setState({
      ...state,
      currentScreen: 9,
    })
  }

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
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={rollChangeButton}
        centerComponent={centerComponent}
      />

      <View style={styles.panel}>
        <Button title='Escanear código QR' onPress={handleQrScanButton} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WaiterView;
