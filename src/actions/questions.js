import { _saveQuestionAnswer } from '../api/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion({ qid, authedUser, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function handleAnswerQuestion(info) {
  return async (dispatch) => {
    dispatch(answerQuestion(info));
    try {
      return _saveQuestionAnswer(info);
    } catch (e) {
      console.warn('Error in handleAnswerQuestion: ', e);
      // TODO: reverse setting to previous state
      alert('There was an error handling your question answer. Try again');
    }
  }
}