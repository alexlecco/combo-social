import { Platform } from 'react-native';

const cardStyle = {
  marginLeft: -10,
  marginRight: -10,
  marginBottom: -10,
  marginTop: -10,
  padding: 20,
}

const RNEconstants = {
  restaurantSelect: {
    centerComponent: {
      text: '¿Donde querés comer?',
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', marginTop: Platform.OS === 'ios' ? 30 : 10 },
    },
    rightComponent: {
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
    }
  },
  restaurantCard: {
    buttonStyle: cardStyle
  },
  projectSelect: {
    centerComponent: {
      text: '¿Que proyecto querés apoyar?',
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', marginTop: Platform.OS === 'ios' ? 30 : 50},
    },
    rightComponent: {
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
    }
  },
  projectCard: {
    buttonStyle: cardStyle
  },
  comboSelect: {
    centerComponent: {
      text: '¿Qué queres comer?',
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', marginTop: Platform.OS === 'ios' ? 30 : 50},
    },
    rightComponent: {
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
    }
  },
  ConfirmOrder: {
    centerComponent: {
      text: 'Confirmá tu pedido',
      style: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', marginTop: Platform.OS === 'ios' ? 30 : 50},
    }
  }
}

export default RNEconstants;
