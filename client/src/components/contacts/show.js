import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function ContactShow(props)
{
    console.log(props)
    return(
        <div>
                <h2>Contact Details</h2>
                <p><b>First Name :  </b>{props.contact.fname}</p>
                <p><b>Last Name:  </b> {props.contact.lname}</p>
                <p><b>Category:  </b> {props.contact.category}</p>
                <p><b>Email:  </b> {props.contact.email}</p>
                <p><b>Mobile:  </b>{props.contact.mobile}</p>
                <p><b>Instagram:  </b> {props.contact.insta}</p>  

                <div class="alert alert-primary" role="alert">
                        After Clicking on "Back" Please Reload the Page...!!
                    </div>
                    <Link to="/contacts"><button className="btn btn-primary">Back</button></Link>            
                </div>
    )
}

const mapStateToProps=(state,props)=>{
    return {
        contact: state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)