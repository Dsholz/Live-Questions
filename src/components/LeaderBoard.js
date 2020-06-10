import React from 'react'
import { connect } from 'react-redux'
import User from './User'

const LeaderBoard = (props) => { 
    	return (
          <div>
          	<ul>
          	{props.users.map((user, index) => (
            	<li key={user}>
             	 <User id={user} position={index + 1}/>
          		</li>
             ))}
  		  </ul>
		</div>
        )
}

function mapStateToProps({ users }) { 
	return {
    	users: Object.keys(users)
      .sort((a,b) => 
 (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    }
}

export default connect(mapStateToProps)(LeaderBoard)