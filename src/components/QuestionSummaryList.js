import QuestionHolder from './QuestionHolder'
import QuestionSummary from './QuestionSummary'

function QuestionSummaryList(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul style={{ listStyleType: "none" }}>
          { props.ids.map(id => (
              <li key={id}>
                <QuestionHolder
                  id={id}
                  content={<QuestionSummary id={id}/>}/>
              </li>))}
        </ul>     
    </div>
  );
}

export default QuestionSummaryList;