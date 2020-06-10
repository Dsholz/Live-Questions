import { RECIEVE_USERS, SAVE_USER_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECIEVE_USERS:
    	return action.users
    case SAVE_USER_ANSWER:
      	const { authedUser, qid, answer } = action.data
      	return {
        	...state,
          	[authedUser]: {
            	...state[authedUser],
              	answers: {
                	...state[authedUser]['answers'],
                  	[qid]: answer
                }
            }
        }
    default:
    	return state
  }
}