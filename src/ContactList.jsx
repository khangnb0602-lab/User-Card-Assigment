import React from 'react'

const ContactList = (props) => {
    return (
        <div className="contact-card">
            <img className="contact-image" src={props.contactlist.avatar} alt={`${props.contactlist.first_name} ${props.contactlist.last_name}`} />
            <div className="contact-info">
                <h4>{props.contactlist.first_name} {props.contactlist.last_name}</h4>
                <p className="contact-email">{props.contactlist.email}</p>
            </div>
        </div>
    )
}

export default ContactList