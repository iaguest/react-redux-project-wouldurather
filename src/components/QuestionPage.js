import QuestionHolder from './QuestionHolder'
import Question from './Question'

function QuestionPage(props) {
  const { qid } = props.match.params;
  return (
    <QuestionHolder
      qid={qid}
      content={<Question qid={qid} />} />
  );
}

export default QuestionPage;