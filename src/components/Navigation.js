import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { removeUser } from '../actions/currentUser'

class Navigation extends Component {
  	logoutUser = () => {
    	this.props.dispatch(removeUser())
      
      	this.props.history.push('/')
    }
  
	render() {
    	return (
        	<div className="navigation">
          
    			<div className="links">
      				<Link to='/'>Home</Link>
      				<Link to="/add">New Question</Link>
      				<Link to="/leaderboard">Leader Board</Link>
    			</div>

             {this.props.currentUser !== '' && <div className="user-welcome">
      			<span>Hello, {this.props.name}</span>
      			<button onClick={this.logoutUser}>Logout</button>
    		</div>}
          
  			</div>
        )
    }
}

const mapStateToProps = ({ users, currentUser }) => {
  	const user = users[currentUser]
    const name = user ? user.name : ''
  
	return {
      	name,
    	currentUser
    }
}

export default withRouter(connect(mapStateToProps)(Navigation))