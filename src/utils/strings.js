export const rootPath = '/';
export const newQuestionPath = `${rootPath}new`;
const _questionPathHead = `${rootPath}question/`
export const questionPath = `${_questionPathHead}:qid`;
export const buildQuestionPath = (qid) => `${_questionPathHead}${qid}`
const _resultPathTail = '/result'
export const questionResultPath = `${questionPath}${_resultPathTail}`
export const buildQuestionResultPath = (qid) => `${buildQuestionPath(qid)}${_resultPathTail}`
export const leaderBoardPath = `${rootPath}leaderboard`

export const optionOneString = "optionOne";
export const optionTwoString = "optionTwo";
export const wouldYouRatherString = "Would you rather?";
export const resultsString = "Results";
