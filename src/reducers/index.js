import { combineReducers } from 'redux'
import questions from '../reducers/questions'
import users from '../reducers/users'
import currentUser from '../reducers/currentUser'

export default combineReducers({
	questions,
  	users,
  	currentUser
})