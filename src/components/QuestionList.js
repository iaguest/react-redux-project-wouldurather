import Question from './Question'
import QuestionOptions from './QuestionOptions'

function QuestionList(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul style={{ listStyleType: "none" }}>
          { props.ids.map(id => (
              <li key={id}>
                <Question
                  id={id}
                  content={<QuestionOptions id={id}/>}/>
              </li>))}
        </ul>     
    </div>
  );
}

export default QuestionList;