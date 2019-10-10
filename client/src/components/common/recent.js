import React from 'react'
import {Link} from 'react-router-dom'

function Recent(props)
{
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title"><span>{props.fname} </span><span>{props.lname}</span></h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
                <p className="card-text"><span><b>Mobile:  </b>{props.mobile}</span><br/><span><b>Instagram:  </b> {props.insta}</span></p>
                <Link to={`/${props.resourceName}/${props.id}`} className="card-link">Show</Link>
            </div>            
        </div>
    )
}

export default Recent