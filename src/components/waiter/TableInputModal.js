import { View, Text, StyleSheet, Modal, TextInput, Pressable } from 'react-native';
import { update, ref, getDatabase, } from 'firebase/database';

const TableInputModal = ({
  modalVisible,
  setModalVisible,
  table,
  setTable,
  orderRefState
}) => {
  const onHandleModalButton = _ => {
    const db = getDatabase();
    const updates = {};
    updates[`${orderRefState}/table`] = table;    
    setModalVisible(!modalVisible)

    return update(ref(db), updates);
  }

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}> ¡Orden aprobada con éxito! </Text>
          <Text style={styles.modalText}> Ya fue enviada a la cocina </Text>
          <Text style={styles.modalText}> ingresá la mesa se hizo el pedido: </Text>
          <TextInput
            onChangeText={setTable}
            value={table}
            keyboardType='numeric'
            style={styles.input}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onHandleModalButton()}
          >
            <Text style={styles.textStyle}> confirmar </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    input: {
    height: 40,
    width: 100,
    borderWidth: 1,
    padding: 10,
  },
});

export default TableInputModal;
