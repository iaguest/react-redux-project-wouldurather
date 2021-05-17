import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

export default function questions(state={}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const {authedUser, qid, answer} = action;
      let updatedVotes = state[qid][answer].votes.concat([authedUser]);
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: updatedVotes
          }
        }
      };
    case ADD_QUESTION:
      const question = action.question;
      return {
        ...state,
        [question.id]: question
      }
    default:
      return state;
  }
}