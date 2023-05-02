import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../src/context/provider'
import database from '../firebase';
import ComboCard from '../src/components/combo/ComboCard';
import RNEconstants from '../src/constants/RNEconstants';

const ComboSelect = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen, currentUser } = state;
  const [combos, setCombos] = useState([])
  const centerComponent = RNEconstants.comboSelect?.centerComponent;

  useEffect(() => {
    const combosRef = ref(database, 'combos/');

    onValue(combosRef, snap => {
      let combos = [];
      snap.forEach(child => {
        combos.push({
          id: child.key,
          name: child.val().name,
          price: child.val().price,
          donationAmount: child.val().donationAmount,
          restaurantId: child.val().restaurantId,
        });
      });
      setCombos(combos);
    });
  }, []);

  const buildCombo = (combo) =>(
    <ComboCard combo={combo} />
  );

  return (
    <View style={styles.container}>
      <Header
        centerComponent={centerComponent}
        rightComponent={{text: `${currentUser.username}`}}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={combos}
            renderItem={(combo) => buildCombo(combo)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default ComboSelect;
