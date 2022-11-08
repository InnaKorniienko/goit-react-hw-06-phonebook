import { nanoid } from "nanoid";
import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Phonebook.module.css";

const initialState = {
    name: '',
    number: '',
    invalidForm: false,
}

export default function PhonebookAdd({onSubmit}) {
    const [state, setState] = useState(initialState);

    const nameId = nanoid();
    const numberId = nanoid();

const handleChange = (e) => {
  const { name, value } = e.target;
  setState((prev) => {
    return {
        ...prev,
        [name]: value,
        invalidForm: false,
    }
  })
} 

  
const handleSubmit = (e) => {
  e.preventDefault();
  const { name, number } = state;
  onSubmit({ name, number });
  setState(initialState);
}


    return (
        <form className={css.form} onSubmit={handleSubmit} >
        <div className={css.inputForm}>
        <label className={css.label} htmlFor={nameId}> Name </label>
        <input className={css.input}
            id={nameId}
            type="text"
            name="name"
            value={state.name}
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
            value={state.number}
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


PhonebookAdd.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
