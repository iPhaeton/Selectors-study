import {SET_GOODS} from 'constants';

const initialState = {
  goods: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS:
      return {...state, goods: action.goods};
    default:
      return initialState;
  }
}
