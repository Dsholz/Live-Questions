import React from 'react'
import { connect } from 'react-redux' 

const User = (props) => {
      	const { name, avatarURL, answeredQuestions, createdQuestions, position } = props
      
    	return (
        	<div className="user">
    			<span id="position">{position}</span>
    			<div className="user-image">
      				<img src={avatarURL} alt="User Avatar"/>
    			</div>
    			<div className="user-detail">
      				<h1>{name}</h1>
      				<div className="group">
        				<span className="quest">Answered question</span>
        				<span>{answeredQuestions}</span>
      				</div>
      				<div>
        				<span className="quest">Asked question</span>
        				<span>{createdQuestions}</span>
      				</div>
    			</div>
    			<div className="user-score">
      				<span>Scrore</span>
      				<span>{answeredQuestions + createdQuestions}</span>
    			</div>
          	</div>
        )
}

function mapStateToProps({ users }, { id }) {
  	const user = users[id]
    const name = user ? user['name'] : null
    const avatarURL = user ? user['avatarURL'] : null
    const answeredQuestions = user ? Object.keys(user['answers']).length : null
    const createdQuestions = user ? user['questions'].length : null
  
	return {
    	name,
      	avatarURL,
      	createdQuestions,
      	answeredQuestions
    }
}

export default connect(mapStateToProps)(User)