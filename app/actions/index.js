import {SET_GOODS, SET_SORTED, COUNT} from 'constants/index';

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

export function count() {
  return {
    type: COUNT,
  }
}
