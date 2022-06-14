import React from "react";
import style from "./ContactBlock.module.css"

const ContactBlock = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactItem}>
                <h5 >{contact.firstName}</h5>
                <h5 >{contact.lastName}</h5>
                <h5 >{contact.phoneNumber}</h5>
            </div>
            <div className={style.buttons}>
                <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ContactBlock