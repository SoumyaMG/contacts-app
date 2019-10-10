import React from 'react'
import {connect} from 'react-redux'
import {startAddContact} from '../../redux/action/contacts'

import ContactForm from './form'

class ContactNew extends React.Component{
    constructor(props)
    {
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(formData)
    {
        this.props.dispatch(startAddContact(formData))
    }

    render()
    {
        return (
            <div>
                <h2>Add New Contact</h2>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect()(ContactNew)