import QuestionHolder from './QuestionHolder'
import QuestionResult from './QuestionResult'

function QuestionResultPage(props) {
  const { qid } = props.match.params;
  return (
    <QuestionHolder
      qid={qid}
      content={<QuestionResult qid={qid} />} />
  );
}

export default QuestionResultPage;