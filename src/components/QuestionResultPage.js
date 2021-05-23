import QuestionHolder from './QuestionHolder'
import QuestionResult from './QuestionResult'

function QuestionResultPage(props) {
  const { id } = props.match.params;
  return (
    <QuestionHolder
      id={id}
      content={<QuestionResult id={id} />} />
  );
}

export default QuestionResultPage;