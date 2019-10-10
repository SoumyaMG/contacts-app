import React from 'react'
import { removeUser } from '../../redux/action/user'
import { connect } from 'react-redux'
import _ from 'lodash'

function Logout(props) {
    if (!_.isEmpty(props.user)) {
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
        //props.history.push('/users/login')
    }

    return (
        <div>
            <h2>You Have Successfully been logged out</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)