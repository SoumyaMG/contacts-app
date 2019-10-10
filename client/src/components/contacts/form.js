import React from 'react'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'


class ContactForm extends React.Component{
    constructor(props)
    {
        super(props)
        console.log(props)
        this.state={
            fname:props.isEdit?props.contact.fname:'',
            lname:props.isEdit?props.contact.lname:'',
            category:props.isEdit?props.contact.category:'',
            email:props.isEdit?props.contact.email:'',
            mobile:props.isEdit?props.contact.mobile:'',
            insta:props.isEdit?props.contact.insta:''
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e)
    {
        e.preventDefault()
        const formData={
            fname:this.state.fname,
            lname:this.state.lname,
            category:this.state.category,
            email:this.state.email,
            mobile:this.state.mobile,
            insta:this.state.insta,
        }
        this.props.handleSubmit(formData)

        this.setState({
            fname:'',
            lname:'',
            category:'',
            email:'',
            mobile:'',
            insta:''
        })
    }

    render()
    {
        console.log(this.props.contact)
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>First Name:</label>
                        <input type="text" className="form-control" value={this.state.fname} name="fname"  onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                <label>Last Name:</label>
                        <input type="text" className="form-control" value={this.state.lname} name="lname"   onChange={this.handleChange}/>
                </div>    
                </div>


                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Category:</label>
                        <input type="text" className="form-control" value={this.state.category} name="category"  onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                <label>Email:</label>
                        <input type="text" className="form-control" value={this.state.email} name="email"   onChange={this.handleChange}/>
                </div>    
                </div>


                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Mobile:</label>
                        <input type="text" className="form-control" value={this.state.mobile} name="mobile"  onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                <label>Instagram:</label>
                        <input type="text" className="form-control" value={this.state.insta} name="insta"   onChange={this.handleChange}/>
                </div>    
                </div>
                    <input type="submit" className="btn btn-primary mb-4"/>
                    <br/>
                    <Link to="/contacts"><button className="btn btn-primary">Back</button></Link>
                </form>
            </div>
        )
    }
}

export default ContactForm

/*
<div className="alert alert-primary" role="alert">
                        After Clicking on "Back" Please Reload the Page...!!
                    </div>
*/