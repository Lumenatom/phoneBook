import React from "react";
import style from "./EditContactBlock.module.css"

const EditContactBlock = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <div className={style.editBlockInput}>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={editFormData.firstName}
                onChange={handleEditFormChange}>
            </input>
            <input
                type="text"
                name="lastName"
                placeholder="lastName"
                value={editFormData.lastName}
                onChange={handleEditFormChange}>
            </input>
            <input
                type="number"
                name="phoneNumber"
                placeholder="phoneNumber"
                value={editFormData.phoneNumber}
                onChange={handleEditFormChange}>
            </input>
            <div className={style.buttons}>
                <button type="submit" >Save</button>
                <button type="button" onClick={handleCancelClick} >Cancel</button>
            </div>
        </div>
    )
}

export default EditContactBlock