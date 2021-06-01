import { emptyAuthedUid } from '../utils/authedUserHelper'

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(uid) {
  return {
    type: SET_AUTHED_USER,
    uid,
  }
}

export function resetAuthedUser() {
  return setAuthedUser(emptyAuthedUid);
}
