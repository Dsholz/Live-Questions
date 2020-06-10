import React from 'react'
import Question from './Question'
import ErrorPage from './ErrorPage'
import { connect } from 'react-redux'

const QuestionPoll = (props) => {
    	return (
        	<div className='container'>
          	{props.question
          	? <Question id={props.id}/>
			: <ErrorPage/>}
          	</div>
        )
}

function mapStateToProps({ questions }, props) {
  	const {id} = props.match.params
    const question = questions[id]
  
	return {
    	id,
      	question
    }
}

export default connect(mapStateToProps)(QuestionPoll)