export const rootPath = '/';
export const signInPath = `${rootPath}sign-in`
export const newQuestionPath = `${rootPath}add`;
const _questionPathHead = `${rootPath}questions/`
export const questionPath = `${_questionPathHead}:qid`;
export const buildQuestionPath = (qid) => `${_questionPathHead}${qid}`
export const leaderBoardPath = `${rootPath}leaderboard`

export const optionOneString = "optionOne";
export const optionTwoString = "optionTwo";
export const wouldYouRatherString = "Would you rather?";
export const resultsString = "Results";
