import {createSelector} from 'reselect';

const getList = (state) => state.getIn(['main', 'goods']);
const getSorted = (state) => state.getIn(['main', 'sorted']);

export const getGoods = createSelector(
  getList,
  getSorted,
  (list, sorted) => {
    return sorted ? list.sort((a, b) => {
        const aPrice = a.get('price');
        const bPrice = b.get('price');
        if (aPrice < bPrice) { return -1; }
        if (aPrice > bPrice) { return 1; }
        if (aPrice === bPrice) { return 0; }
      }) : list;
  }
)
