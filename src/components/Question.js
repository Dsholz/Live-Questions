import React from 'react'
import { connect } from 'react-redux'
import QuestionForm from './QuestionForm'
import QuestionResult from './QuestionResult'

const Question = (props) => { 
      	const { id, answered, name, avatar } = props        
      
    	return (
        	<div className="question">
    <h3>{name} asks :</h3>
    <div>
      <div className="container">
        <div className="inner-container1">
          <img src={`../${avatar}`} alt="User Info"/>
        </div>
        <div className="inner-container2">
			{answered === false && <QuestionForm id={id}/>}	
			{answered === true && <QuestionResult id={id}/>}
        </div>
      </div>

      <div>

      </div>
    </div>
  </div>
        )
    }

function mapStateToProps({questions, users, currentUser }, { id }) {
  	const question = questions[id]
    const user = question ? users[question['author']] : {}
    
	return {
      	answered: currentUser ? Object.keys(users[currentUser]['answers']).includes(id) : false,
      	avatar: user ? user['avatarURL'] : '',
      	name: user ? user['name'] : ''
    }
}

export default connect(mapStateToProps)(Question)