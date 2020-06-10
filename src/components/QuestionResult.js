import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const QuestionResult = (props) => {
      	const { optionOne, optionTwo, optionOneVotes,
               optionTwoVotes, total, answeredQuestion } = props
        const optionOnePercent = ((optionOneVotes / total) * 100).toFixed(2)
        const optionTwoPercent = ((optionTwoVotes / total) * 100).toFixed(2)
        
    	return (
        	<Fragment>
          	  <h2>Results:</h2>
          		
          	  <div className='results'>
            <div 
          		className="result"
          		style={{
          			backgroundColor: answeredQuestion === 'optionOne' ? '#CCF6E3' : '#e9e9e9'
          		}}>
				{answeredQuestion === 'optionOne' && <span>Your Vote</span>}
              <h3>Would You Rather {optionOne}?</h3>

              <div className="outerbar">
                <div 
					className="innerbar"
					style={{
          				width: `${optionOnePercent}%`
					}}>
						{optionOnePercent}%
                </div>
              </div>

              <p>{optionOneVotes} out of {total} votes</p>
            </div>

			<div 
				className="result"
				style={{
          			backgroundColor: answeredQuestion === 'optionTwo' ? '#CCF6E3' : '#e9e9e9'
          		}}>
				{answeredQuestion === 'optionTwo' && <span>Your Vote</span>}
              <h3>Would You Rather {optionTwo}?</h3>

              <div className="outerbar">
                <div 
					className="innerbar"
					style={{
						width: `${optionTwoPercent}%`
					}}>
						{optionTwoPercent}%
                </div>
              </div>

              <p>{optionTwoVotes} out of {total} votes</p>
            </div>
          </div>
          	</Fragment>
        )
}

function mapStateToProps({questions, users, currentUser}, {id}) {
  	const question = questions[id]
	const user = users[currentUser]
    const optionOneVotes = question ? question['optionOne']['votes'].length : null
    const optionTwoVotes = question ? question['optionTwo']['votes'].length : null
    const optionOne = question ? question['optionOne']['text'] : null
    const optionTwo = question ? question['optionTwo']['text'] : null
    const totalVotes = optionOneVotes + optionTwoVotes
  
	return {
      	optionOne,
      	optionTwo,
    	optionOneVotes,
      	optionTwoVotes,
        total: totalVotes,
      	questioni: question ? question : null,
		answeredQuestion: user ? user['answers'][id] : null
    }
} 

export default connect(mapStateToProps)(QuestionResult)