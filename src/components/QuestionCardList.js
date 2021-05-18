import QuestionCard from './QuestionCard'
import QuestionSummary from './QuestionSummary'

function QuestionCardList(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul style={{ listStyleType: "none" }}>
          { props.ids.map(id => (
              <li key={id}>
                <QuestionCard
                  id={id}
                  content={<QuestionSummary id={id}/>}/>
              </li>))}
        </ul>     
    </div>
  );
}

export default QuestionCardList;