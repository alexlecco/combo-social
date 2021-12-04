import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ContextProvider from './context/provider';
import ComboApp from './ComboApp';


const App = _ => {

  return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <ContextProvider>
          <ComboApp />
        </ContextProvider>
        <StatusBar style='auto' />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default App;
