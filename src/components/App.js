import React, { Component } from 'react';
import '../App.css';
import DashBoard from './DashBoard'
import QuestionPoll from './QuestionPoll'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions'
import { getUsers } from '../actions/users'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
   this.props.dispatch(getQuestions())
   this.props.dispatch(getUsers())
  }
  
  render() {
    return (
      <Router>
      	<Navigation/>
     	<div className="App">
      	<div>
      	<PrivateRoute path='/' exact component={DashBoard}/>
		<PrivateRoute path='/questions/:id' exact component={QuestionPoll}/>
		<PrivateRoute path='/leaderboard' exact component={LeaderBoard}/>
		<PrivateRoute path='/add' exact component={NewQuestion}/>
		</div>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(App);
