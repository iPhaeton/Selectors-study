import {createSelector} from 'reselect';

const getList = (state) => state.getIn(['main', 'goods']).toJS();
const getSorted = (state) => state.getIn(['main', 'sorted']);

export const getGoods = createSelector(
  getList,
  getSorted,
  (list, sorted) => {
    return sorted ? list.sort((a, b) => a.price - b.price) : list;
  }
)
