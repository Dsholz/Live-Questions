import { _getUsers } from '../utils/_DATA.js'

export const RECIEVE_USERS = 'RECIEVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export const recieveUsers = (users) => {
	return {
    	type: RECIEVE_USERS,
        users
    }
}

export const saveUserAnswer = (data) => ({
	type: SAVE_USER_ANSWER,
  	data
})

export const getUsers = () => {
  return (dispatch) => {
  	return _getUsers()
    .then(users => {
    	dispatch(recieveUsers(users))
    })
  }
}