import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { setUser } from '../../redux/action/user'
import _ from 'lodash'

class Profile extends React.Component {
    componentDidMount() {
        if (_.isEmpty(this.props.user)) {
            axios.get('/users/account', {
                headers: {
                    'x-auth': localStorage.getItem('userAuth')
                }
            }).then((response) => {
                console.log(response.data)
                this.props.dispatch(setUser(response.data))
            })
                .catch((err) => {
                    this.props.history.push('/users/login')
                })
        }
    }

    render() {
        return (
            <div>
                <h2>Users Profile</h2>
                <h4>{this.props.user.username}</h4>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)