import { CURRENT_USER, REMOVE_USER } from '../actions/currentUser'

export default function currentUser(state = '', action) {
	switch(action.type) {
      case CURRENT_USER:
      	return action.username
      case REMOVE_USER:
        return ''
      default:
      return state
    }
}