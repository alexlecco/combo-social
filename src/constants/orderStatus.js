const orderStatus = {
  PENDING: {
    status: 'pending',
    text: 'pendiente',
    color: 'red',
  },
  ACCEPTED: {
    status: 'accepted',
    text: 'preparando',
    color: 'orange',
  },
  DELIVERED: {
    status: 'delivered',
    text: 'entregado',
    color: 'green',
  },
  PAYED: {
    status: 'payed',
    text: 'pagado',
    color: 'blue',
  }
}

export default orderStatus;
