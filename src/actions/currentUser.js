export const CURRENT_USER = 'CURRENT_USER'
export const REMOVE_USER = 'REMOVE_USER'

export const setCurrentUser = (username) => {
	return {
    	type: CURRENT_USER,
      	username
    }
}

export const removeUser = () => {
	return {
    	type: REMOVE_USER,
    }
}