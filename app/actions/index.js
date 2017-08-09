import {SET_GOODS} from 'constants';

export function setGoods (goods) {
  return {
    type: SET_GOODS,
    goods,
  }
}
