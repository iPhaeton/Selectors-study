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

let prevState = initialState;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      const newState = state.set('goods', action.goods);
      console.log('SET_GOODS', prevState === newState);
      prevState = newState;
      return newState;
    }
    case SET_SORTED: {
      const newState = state.set('sorted', action.sorted);
      console.log('SET_SORTED', prevState === newState);
      prevState = newState;
      return newState;
    }
    default:
      return initialState;
  }
}
