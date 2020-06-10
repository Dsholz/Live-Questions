import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js'
import { saveUserAnswer } from './users'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export const recieveQuestions = (questions) => ({
    	type: RECIEVE_QUESTIONS,
        questions
})

export const saveQuestion = (question) => ({
	type: SAVE_QUESTION,
  	question
})

export const savequestionAnswer = (data) => ({
	type: SAVE_QUESTION_ANSWER,
  	data
})

export const getQuestions = () => {
  return (dispatch) => {
  	return _getQuestions()
    .then(questions => {
    	dispatch(recieveQuestions(questions))
    })
  }
}

export const saveQuestionAnswer = (data) => {
	return (dispatch) => {
    	return _saveQuestionAnswer(data)
      	.then(() => {
        	dispatch(savequestionAnswer(data))
          	dispatch(saveUserAnswer(data))
        })
    }
}

export const saveQuestionCreated = (question) => {
	return (dispatch) => {
    	return _saveQuestion(question)
      .then((result) => {
        	dispatch(saveQuestion(result))
        })
    }
}