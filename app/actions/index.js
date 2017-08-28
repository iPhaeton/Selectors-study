import {SET_SORTED, COUNT} from 'constants/index';

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
