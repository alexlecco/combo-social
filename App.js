import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, LogBox } from 'react-native';

import ContextProvider from './src/context/provider';
import ComboApp from './src/components/ComboApp';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default App;
