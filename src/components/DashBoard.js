import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsItem from './QuestionsItem'

class DashBoard extends Component {
 state = {
 	toggleQuestions: false
 }

 toggleQuestions = () => {
 	this.setState((prevState) => ({
    	toggleQuestions: !prevState.toggleQuestions
    }))
 }
  
 render() {
  return (
		<div>
         <button onClick={this.toggleQuestions} className="form-button">{this.state.toggleQuestions === false ? 
         'Show Answered Questions' : 'Show Unanswered Questions'}</button>
   		{this.state.toggleQuestions === false &&  <div>
    		<h1>Unanswered Questions</h1>
    		<ul>
   				{this.props.unansweredQuestions.map(id => (
  					<li key={id}>
						<QuestionsItem id={id}/>
					</li>))}
			</ul>
    	</div>}

		{this.state.toggleQuestions === true && <div>
    <h1>Answered Questions</h1>
    <ul>
    {this.props.answeredQuestions.map(id => (
  		<li key={id}>
			<QuestionsItem id={id}/>
		</li>
  	))}
	</ul>
    </div>}
    </div>
  ) 
 }
}

function mapStateToProps({questions, users, currentUser}) {
 	const loggedUser = users[currentUser]
    const loggedUserAnsweredQuestions = loggedUser ? Object.keys(loggedUser['answers']) : []
    const questionsIds = Object.keys(questions)
    const answeredQuestions = questionsIds.length !== 0 ? 
          questionsIds.filter(questionId => loggedUserAnsweredQuestions.includes(questionId))
    		.sort((a,b) => questions[b].timestamp - questions[a].timestamp) : []
    const unansweredQuestions = questionsIds.length !== 0 ? 
          questionsIds.filter(questionId => !loggedUserAnsweredQuestions.includes(questionId))
    		.sort((a,b) => questions[b].timestamp - questions[a].timestamp) : []

    return {
      answeredQuestions,
      unansweredQuestions
    }
}

export default connect(mapStateToProps)(DashBoard)