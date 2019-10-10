import React from 'react'
import ContactForm from './form'
import {connect} from 'react-redux'
import {startEditContact} from '../../redux/action/contact'

class ContactEdit  extends React.Component{
    constructor(props)
    {
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(formData)
    {
        const id=this.props.match.params.id
        this.props.dispatch(startEditContact(id,formData))
    }

    render()
    {
        console.log(this.props.match.params.id)
        console.log(this.props.contact)

        return (
            <div>
                <ContactForm
                contact={this.props.contact}
                isEdit={true}
                handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

 const mapStateToProps=(state,props)=>{

     return {
         contact: state.contacts.find(contact => contact._id === props.match.params.id)
     }
}

export default connect(mapStateToProps)(ContactEdit)
