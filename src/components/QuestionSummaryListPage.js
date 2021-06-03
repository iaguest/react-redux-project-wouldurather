import React from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import QuestionSummaryList from './QuestionSummaryList'

class QuestionSummaryListPage extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered Questions</Tab>
          <Tab>Answered Questions</Tab>
        </TabList>
    
        <TabPanel>
          <QuestionSummaryList
            qids={this.props.unansweredIds} />
        </TabPanel>
        <TabPanel>
          <QuestionSummaryList
            qids={this.props.answeredIds} />
        </TabPanel>
      </Tabs>
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {
  const answeredIds = new Set(Object.keys(users[authedUser].answers));
  const unansweredIds = Object.keys(questions).filter(qid => !answeredIds.has(qid));
  const sortedQids = ids => ids.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredIds: sortedQids([...answeredIds]),
    unansweredIds: sortedQids(unansweredIds)
  };
}

export default connect(mapStateToProps)(QuestionSummaryListPage);