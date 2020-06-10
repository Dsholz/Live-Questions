import logo from '../logo.svg';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'
import { withRouter } from 'react-router'

class UserLogin extends Component {
	state = {
		selectedPerson: 'tylermcginnis'
	}

	handleChange = (e) => {
		const { value } = e.target

		this.setState(() => ({
			selectedPerson: value
		}))
	}

	handleSubmit = () => {
		const { selectedPerson } = this.state

		this.props.dispatch(setCurrentUser(selectedPerson))
	}

	render() {
		return (
			<div className="user-login">
				<div className="login-text">
					<h1>Welcome To The Live Questions App!</h1>
					<p>please sign-in to continue</p>
				</div>

				<img className="image" src={logo} alt="App Logo" />

				<div className="login">
					<h2>Sign in</h2>

					<select value={this.state.selectedPerson} onChange={this.handleChange}>
						<option value='sarahedo'>Sarah Edo</option>
						<option value='tylermcginnis'>Tyler McGinnis</option>
						<option value='johndoe'>John Doe</option>
					</select>

					<button onClick={this.handleSubmit}>Sign In</button>
				</div>
			</div>
		)
	}
}

export default withRouter(connect()(UserLogin))
