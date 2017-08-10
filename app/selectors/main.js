export const getGoods = (state) => {
  const list = state.getIn(['main', 'goods']);
  const sorted = state.getIn(['main', 'sorted']);

  return sorted ? list.sort((a, b) => {
    const aPrice = a.get('price');
    const bPrice = b.get('price');
    if (aPrice < bPrice) { return -1; }
    if (aPrice > bPrice) { return 1; }
    if (aPrice === bPrice) { return 0; }
  }) : list;
}
