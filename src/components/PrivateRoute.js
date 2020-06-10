import React from 'react'
import {
 Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import UserLogin from './UserLogin'

const PrivateRoute = (props) => {
      const { component: Component, currentUser, ...rest} = props
    	return (
        	<Route {...rest} render={(props) => (
        		currentUser !== ''
          		? <Component {...props}/>
          		: <UserLogin/>
        )}/>
        )
    }

const mapStateToProps = ({currentUser}) => ({currentUser})

export default connect(mapStateToProps)(PrivateRoute)