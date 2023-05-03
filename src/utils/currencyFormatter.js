require('number-to-locale-string-polyfill');

const currencyFormatter = (value = '') => value?.toLocaleString('es-ar', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
});

export default currencyFormatter;
