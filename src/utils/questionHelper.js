function answerIds(users, authedUser) {
  return Object.keys(users[authedUser].answers);
}

export function getSelectedOption(users, authedUser, qid) {
  return answerIds(users, authedUser).includes(qid)
    ? users[authedUser].answers[qid]
    : null;
}