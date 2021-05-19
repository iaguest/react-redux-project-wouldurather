import QuestionCard from './QuestionCard'
import QuestionDefinition from './QuestionDefinition'

function QuestionPage(props) {
  const { id } = props.match.params;
  return (
    <QuestionCard
      id={id}
      content={<QuestionDefinition id={id} />} />
  );
}

export default QuestionPage;