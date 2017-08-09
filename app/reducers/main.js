import {SET_GOODS} from 'constants';
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
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {...state, goods: action.goods};
    default:
      return initialState;
  }
}
