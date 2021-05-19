import QuestionHolder from './QuestionHolder'
import Question from './Question'

function QuestionPage(props) {
  const { id } = props.match.params;
  return (
    <QuestionHolder
      id={id}
      content={<Question id={id} />} />
  );
}

export default QuestionPage;