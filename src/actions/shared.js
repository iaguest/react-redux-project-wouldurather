import { _getUsers, _getQuestions } from '../api/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// TODO: Remove hardcoded user id
const AUTHED_UID = 'tylermcginnis';

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());

    const users = await _getUsers();
    const questions = await _getQuestions();

    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(AUTHED_UID));
    dispatch(hideLoading());
  }
}
