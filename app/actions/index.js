import {SET_GOODS, SET_SORTED} from 'constants/index';

export function setGoods (goods) {
  return {
    type: SET_GOODS,
    goods,
  }
}

export function setSorted(sorted) {
  return {
    type: SET_SORTED,
    sorted,
  }
}
