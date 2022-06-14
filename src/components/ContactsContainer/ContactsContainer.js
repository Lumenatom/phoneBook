import React, { useState } from 'react';
import { arrayContacts } from './arrayContacts';
import { nanoid } from "nanoid";
import ContactBlock from './ContactBlock/ContactBlock';
import EditContactBlock from './EditContactBlock/EditContactBlock';
import style from "./ContactsContainer.module.css"

function ContactsContainer() {

    //Состояние массива контактов
    const [contacts, setContacts] = useState(arrayContacts);

    //Состояние поисковой строки 
    const [valueSearch, setValueSearch] = useState("");

    //функция которая фильтрует контаты по данным которые введены в input
    const filterContacts = contacts.filter((contact) => {
        return contact.firstName.includes(valueSearch) ||
            contact.lastName.includes(valueSearch) ||
            contact.phoneNumber.includes(valueSearch)
    })

    //Cостояние для создания нового обьекта, для добавление в существующий массив "arrayContacts"
    const [addFormData, setAddFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    //Cостояние для создания нового обьекта,при редактировании 
    const [editFormData, setEditFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    //Состояние которое хранит пользователя которого выбрали для редактирования
    const [editContactId, setEditContactId] = useState(null);

    // Функция которая улавливает по имени атрибута поле которое редактируется
    //  и передает значение в готовое состояние
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    //Функция которая считает изменения в поле input и записывает их в обьект, таким образом обновля его
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    //Функция берет обьект из состояния и отправляет его в массив контактов "arrayContacts"
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            id: nanoid(),
            firstName: addFormData.firstName,
            lastName: addFormData.lastName,
            phoneNumber: addFormData.phoneNumber,
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

    };

    //Функция которая обновляет на странице весь масив контактов при Save/Cancel/Delete
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            phoneNumber: editFormData.phoneNumber,
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    };

    //Функция которая вызывает при клике нужное поле редактирования и выводит поля Input для изменения
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phoneNumber: contact.phoneNumber,
        };
        setEditFormData(formValues);
    };

    //Функция которая отменяет изменение контакта
    const handleCancelClick = () => {
        setEditContactId(null);
    };

    //Функция которая удаляет выбраный обьект из масива
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };


    return (
        <div className={style.mainBlock}>
            <div className={style.searchBlock}>
                {/* <h2>Find contact:</h2> */}
                <div className={style.blockInput}>
                    <input type="text" placeholder="Search contact" onChange={(e) => setValueSearch(e.target.value)} />
                </div>
            </div>
            <h2> Create contact</h2>
            <div className={style.createBlock}>
                <form onSubmit={handleAddFormSubmit}>
                    <input type="text"
                        name="firstName"
                        placeholder="firstName"
                        onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                        name="lastName"
                        placeholder="lastName"
                        onChange={handleAddFormChange}>
                    </input>
                    <input type="number"
                        name="phoneNumber"

                        placeholder="phoneNumber"
                        onChange={handleAddFormChange}>
                    </input>
                    <button type="submit"> Create</button>
                </form>
            </div>
            <div className={style.contactsHeader}>
                <h5>FIRST NAME</h5>
                <h5>LAST NAME</h5>
                <h5>PHONE NUMBER</h5>
                <h5>EDIT | DELETE</h5>
            </div>
            <div className={style.contactsBlock}>
                <form onSubmit={handleEditFormSubmit} >

                    {filterContacts.map((contact) => (
                        <div className={style.cotnactsItem}>
                            {editContactId === contact.id
                                ? <EditContactBlock
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                                : <ContactBlock
                                    contact={contact}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick} />
                            }
                        </div>
                    ))}
                </form>
            </div>

        </div>
    );
}

export default ContactsContainer;










