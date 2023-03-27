export function onlyNumber(value) {
  return Number(value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
}
