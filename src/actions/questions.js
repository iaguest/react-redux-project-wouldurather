import { _saveQuestion, _saveQuestionAnswer } from '../api/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

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
      alert('There was an error handling your answer. Try again!');
    }
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return async (dispatch) => {
    dispatch(addQuestion(question));
    try {
      return _saveQuestion(question);
    } catch (e) {
      console.warn('Error in handleAddQuestion: ', e);
      // TODO: reverse setting to previous state
      alert('There was an error when creating your question. Try again!');
    }
  }
}