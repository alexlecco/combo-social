const orderStatus = {
  PENDING: {
    status: 'pending',
    text: 'pendiente',
    color: '#fc5a4e',
    key: 'PENDING',
    textButton: 'Escanear código QR',
  },
  ACCEPTED: {
    status: 'accepted',
    text: 'preparando',
    color: '#fc9f4e',
    key: 'ACCEPTED',
    textButton: 'Entregar orden',
  },
  DELIVERED: {
    status: 'delivered',
    text: 'entregado',
    color: '#4efc57',
    key: 'DELIVERED',
    textButton: 'Cobrar orden',
  },
  PAYED: {
    status: 'payed',
    text: 'pagado',
    color: '#4e91fc',
    key: 'PAYED',
    textButton: '',
  },
};

export default orderStatus;
