export function formatPrice(value = '') {
  const valueString = value.toString().replace('.', ',');

  const [integer, decimal] = valueString.split(',');

  const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  if (!decimal) return `R$ ${formatted},00`;

  if (decimal.length === 1) return `R$ ${formatted}, ${decimal[0]}0`;

  return `R$ ${formatted}, ${decimal[0]}${decimal[1]}`;
}
