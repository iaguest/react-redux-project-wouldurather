export function answerIds(user) {
  return Object.keys(user.answers);
}

export function score(user) {
  return user.questions.length + answerIds(user).length;
}
