import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../actions/questions'

class QuestionForm extends Component {
  state = {
    	selectedOption: ''
    }

	handleChange = (e) => {
    	const { value } = e.target
        
        this.setState(() => ({
        	selectedOption: value
        }))
    }

	handleSubmit = (e) => {
    	e.preventDefault()
      
      	const { currentUser, id } = this.props
        const { selectedOption } = this.state
      
       this.props.dispatch(saveQuestionAnswer({
       		authedUser: currentUser,
         	qid: id,
         	answer: selectedOption
       }))
    }
  
	render() {
       const {id, optionOne, optionTwo} = this.props.question
      
    	return (
          <Fragment>
          <h2>Would You Rather ...</h2>
        	<form 
			className="form"
			onSubmit={this.handleSubmit}>
            <div>  
              <label className="form-label">
				<input 
					type="radio" 
                    name={id}
					value="optionOne"
					checked={this.state.selectedOption === 'optionOne'}
					onChange={this.handleChange}
					className="form-input"
					/>
					{optionOne && optionOne['text']}
			  </label>
            </div>

            <div>
              <label className="form-label">
				<input 
					type="radio"
					name={id}
					value="optionTwo"
					checked={this.state.selectedOption === 'optionTwo'}
					onChange={this.handleChange}
					className="form-input"
				/>
					{optionTwo && optionTwo['text']}
			  </label>
            </div>

			<div>
				<button 
					className="form-button"
					disabled={this.state.selectedOption === ''}>Submit</button>
			</div>
          </form>
		</Fragment>
        )
    }
}

function mapStateToProps({questions, currentUser }, {id}) {
  	const question = questions[id]
  
	return {
    	currentUser,
    	question: question ? question : {}
    }
}

export default connect(mapStateToProps)(QuestionForm)