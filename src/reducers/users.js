import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

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
    case ADD_QUESTION:
      const { id, author } = action.question;
      let updatedQuestions = state[author].questions.concat(id);
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: updatedQuestions
        }
      }
    default:
      return state;
  }
}