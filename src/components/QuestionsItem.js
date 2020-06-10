import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

const QuestionsItem = (props) => {
      	const {name, avatar, option, id} = props
      	
    	return (
        <div className="question">
    <h3>{name} asks :</h3>
    <div>
      <div className="container">
        <div className="inner-container1">
          <img src={avatar} alt="User Info"/>
        </div>
        <div className="inner-container2">
          <h2>Would You Rather ...</h2>
          <p>..{option}..</p>
		  <Link
			to={`/questions/${id}`}
			className='form-button'>View Poll</Link>
        </div>
      </div>

      <div>

      </div>
    </div>
  </div>
      )
}

function mapStateToProps({questions, users}, {id}) {
	const question = questions[id]
    
    const user = users[question['author']]
    
    return {
      	name: user ? user['name'] : null,
      	avatar: user ? user['avatarURL']: null,
    	option: question['optionOne']['text'].substring(0, 18)
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsItem))