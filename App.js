import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, LogBox } from 'react-native';

import ContextProvider from './context/provider';
import ComboApp from './ComboApp';


const App = _ => {
  useEffect(() => {
    // Ignore log notification by message:
    LogBox.ignoreLogs(['Warning: ...']);
  
    // Ignore all log notifications:
    LogBox.ignoreAllLogs();
  })

  return(
    <View style={styles.container}>
      <ContextProvider>
        <ComboApp />
      </ContextProvider>
      <StatusBar style='auto' />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
