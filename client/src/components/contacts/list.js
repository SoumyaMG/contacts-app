import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveContact,startListContacts} from '../../redux/action/contacts'
import _ from 'lodash'

import Recent from '../common/recent'

class  ContactList extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isLoading:true
        }
        this.handleRemove=this.handleRemove.bind(this)
        this.handleShow=this.handleShow.bind(this)
        this.handleEdit= this.handleEdit.bind(this)
    }

    componentDidMount()
    {   
            this.props.dispatch(startListContacts())
            this.setState({isLoading:false})
    }

    handleRemove(id)
    {
            this.props.dispatch(startRemoveContact(id))
    }

    handleShow(id)
    {
        this.props.history.push(`/contacts/${id}`)
    }

    handleEdit(id)
    {
        this.props.history.push(`/contacts/edit/${id}`)
    }


    render(){
        return (
            <div>
               <h2 className="mb-4">Listing all the Contacts</h2>
               <div className="row">
               <div className="col-md-9">
                   {
                       _.isEmpty(this.props.contacts)?(
                        <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                       ):(
                           <div>
                               <table className="table table-striped" >
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Category</th>
                            <th>Mobile</th>
                            <th>Instagram</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact,index)=>{
                                return (<tr key={contact._id}>
                                    <td>{index+1}</td>
                                    <td>{contact.fname}</td>
                                    <td>{contact.lname}</td>
                                    <td>{contact.category}</td>
                                    <td>{contact.mobile}</td>
                                    <td>{contact.insta}</td>
                                    <td><button className="btn btn-primary" onClick={()=>{  
                                            this.handleEdit(contact._id)
                                    }}>Edit</button><span> </span>

                                    <button className="btn btn-primary" onClick={()=>{  
                                            this.handleShow(contact._id)
                                    }}>Show</button><span> </span>

                                    <button className="btn btn-primary" onClick={()=>{
                                        const confirmRemove=window.confirm('Are you sure?')
                                        if(confirmRemove)
                                        {
                                            this.handleRemove(contact._id)
                                        }
                                    }}>Remove</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <br />
                <Link to="/contacts/new"><button className="btn btn-primary">Add Contact</button></Link>
                            </div>
                       )
                   }
                </div>
                <div className="col-md-3">
                        <h5>Recently Added</h5>
                        {this.props.contacts.slice(this.props.contacts.length-2).reverse().map(contact=>{
                            return <Recent 
                                    key={contact._id}
                                    fname={contact.fname}
                                    lname={contact.lname}
                                    email={contact.email}
                                    id={contact._id}
                                    mobile={contact.mobile}
                                    insta={contact.insta}
                                    resourceName="contacts"
                                    />
                        })}
                </div>
               </div>
            </div>
        )
    
    }
}

const mapStateToProps=(state)=>{
    return {
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)
