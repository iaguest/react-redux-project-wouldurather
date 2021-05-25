import QuestionHolder from './QuestionHolder'
import QuestionSummary from './QuestionSummary'

function QuestionSummaryList(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <ul>
          { props.qids.map(qid => (
              <li key={qid}>
                <QuestionHolder
                  qid={qid}
                  content={<QuestionSummary qid={qid}/>}/>
              </li>))}
        </ul>     
    </div>
  );
}

export default QuestionSummaryList;