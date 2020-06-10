import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { saveQuestionCreated } from '../actions/questions'

class NewQuestion extends Component {
  	state = {
    	optionOne: '',
      	optionTwo: ''
    }

	handleChange = e => {
    	const { value, name } = e.target
        
        this.setState(() => ({
        	[name]: value
        }))
    }

	handleSubmit = (e) => {
      	e.preventDefault()
      
      	const { optionOne, optionTwo } = this.state
        const { currentUser } = this.props
      	
    	this.props.dispatch(saveQuestionCreated({
        	author: currentUser,
          	optionOneText: optionOne,
          	optionTwoText: optionTwo
        }))
      
      	this.props.history.push('/')
    }
  
	render() {
    	return (
      	<div>
          	<h1>Create New Question</h1>
          	<p>Complete the Question</p>
          	<h3>Would you rather</h3>
          	
           	<form onSubmit={this.handleSubmit}>
          		<input
          		type='text'
             	name='optionOne'
             	value={this.state.optionOne}
             	onChange={(e) => {
                  this.handleChange(e)
                  console.log(e.target.name)
                }}
          		placeholder='Enter Question One Text Here'
          		/>
             
             	<input
          		type='text'
             	name='optionTwo'
				value={this.state.optionTwo}
      			onChange={this.handleChange}
          		placeholder='Enter Question Two Text Here'
          		/>

				<button
				className='form-button'
				disabled={this.state.optionOne === '' && this.state.optionTwo === ''}
				>Submit</button>
			</form>
          </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default withRouter(connect(mapStateToProps)(NewQuestion))