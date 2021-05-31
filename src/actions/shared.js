import { _getUsers, _getQuestions } from '../api/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setDefaultUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());

    const users = await _getUsers();
    const questions = await _getQuestions();

    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setDefaultUser());
    dispatch(hideLoading());
  }
}
