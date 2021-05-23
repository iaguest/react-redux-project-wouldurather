export const rootPath = '/';
export const newQuestionPath = `${rootPath}new`;
const _questionPathHead = `${rootPath}question/`
export const questionPath = `${_questionPathHead}:id`;
export const buildQuestionPath = (id) => `${_questionPathHead}${id}`
const _resultPathTail = '/result'
export const questionResultPath = `${questionPath}${_resultPathTail}`
export const buildQuestionResultPath = (id) => `${buildQuestionPath(id)}${_resultPathTail}`

export const optionOneString = "optionOne";
export const optionTwoString = "optionTwo";
export const wouldYouRatherString = "Would you rather?";
export const resultsString = "Results";
