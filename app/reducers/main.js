import {SET_GOODS, SET_SORTED} from 'constants/index';
import {fromJS} from 'immutable';

const initialState = fromJS({
  goods: [
    {
      name: 'tomatoes',
      price: 3,
    },
    {
      name: 'potatoes',
      price: 2,
    },
    {
      name: 'cucumbers',
      price: 5,
    },
    {
      name: 'salad',
      price: 1,
    }
  ],
  sorted: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return state.set('goods', action.goods);
    case SET_SORTED:
      return state.set('sorted', action.sorted);
    default:
      return initialState;
  }
}
