import { answerIds } from './userHelper'

const emptyOption = null;

function _getSelectedOption(user, qid) {
  return answerIds(user).includes(qid)
    ? user.answers[qid]
    : emptyOption;
}

export function getSelectedOption(user, qid) {
  return _getSelectedOption(user, qid);
}

export function userHasAnswered(user, qid) {
  return getSelectedOption(user, qid) !== emptyOption;
}