import { answerIds } from './userHelper'

function _getSelectedOption(user, qid) {
  return answerIds(user).includes(qid)
    ? user.answers[qid]
    : null;
}

// TODO: pass user in directly
export function getSelectedOption(users, uid, qid) {
  const user = users[uid];
  return _getSelectedOption(user, qid);
}
