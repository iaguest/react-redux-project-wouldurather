import { _getUsers, _getQuestions } from '../api/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

// TODO: Remove hardcoded user id
const AUTHED_ID = 'tylermcginnis';

export async function handleInitialData() {
  return (dispatch) => {
    const users = await _getUsers();
    const questions = await _getQuestions();

    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(AUTHED_ID));
  }
}
