import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions'

export default function users(state={}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION:
      const {authedUser, qid, answer} = action;
      let updatedAnswers = { ...state[authedUser].answers, [qid]: answer };
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: updatedAnswers
        }
      }
    default:
      return state;
  }
}