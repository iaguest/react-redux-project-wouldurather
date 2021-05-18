import QuestionCard from './QuestionCard'
import Question from './Question'

function QuestionCardList(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul style={{ listStyleType: "none" }}>
          { props.ids.map(id => (
              <li key={id}>
                <QuestionCard
                  id={id}
                  content={<Question id={id}/>}/>
              </li>))}
        </ul>     
    </div>
  );
}

export default QuestionCardList;