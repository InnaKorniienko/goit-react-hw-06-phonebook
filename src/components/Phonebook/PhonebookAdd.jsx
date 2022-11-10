import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contacts-selectors";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contacts-slice";
import Notiflix from "notiflix";
import css from "./Phonebook.module.css";

const PhonebookAdd = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const nameId = nanoid();
    const numberId = nanoid();

    const onAddContact = contact => {
        if (isDublicate(contact)) {
        Notiflix.Notify.warning(`${contact.name} or ${contact.number} is already in contact`);
        return;
    }
        const action = addContact(contact);
        dispatch(action);
        setName('');
        setNumber('');
    }

        const isDublicate = ({ name, number }) => {
        const result = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number.toLowerCase() === number.toLowerCase()
    );
        return result;
    }

   
    const handleChange = e => {
        switch (e.currentTarget.name) {
          case 'name':
            setName(e.currentTarget.value);
            break;
    
          case 'number':
            setNumber(e.currentTarget.value);
            break;
    
          default:
            return;
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({name, number})
      }  

      return (
        <form className={css.form} onSubmit={handleSubmit} >
        <div className={css.inputForm}>
        <label className={css.label} htmlFor={nameId}> Name </label>
        <input className={css.input}
            id={nameId}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Please add name"
            required
        />
        </div>
        <div className={css.inputForm}>
        <label className={css.label} htmlFor={numberId}> Number </label>
        <input className={css.input}
            id={numberId}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Please add telnumber"
            required
        />
        </div>
        <button className={css.inputForm__button}> Add contact </button>
        </form>
    )
}

export default PhonebookAdd;