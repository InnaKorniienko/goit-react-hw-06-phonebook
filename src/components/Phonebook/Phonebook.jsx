import PhonebookAdd from "./PhonebookAdd";
import Contactlist from "./Contactlist";
import Filter from "./Filter";
import Notiflix from "notiflix";
import css from "./Phonebook.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filter-slice";
import { addContact, removeContact } from "redux/contacts/contacts-slice";
import { getFilteredContacts } from "redux/contacts/contacts-selectors";

export default function Phonebook() {
const contacts = useSelector(getFilteredContacts);
const filter = useSelector(getFilter);
const dispatch = useDispatch();
    
const onAddContact = (contact) => {
    if (isDublicate(contact)){
    return Notiflix.Notify.warning(`${contact.name} or ${contact.number} is already in contact`)
    }
    const action = addContact(contact);
    dispatch(action);
}

const onRemoveContact = (id) => {
    const action = removeContact(id);
    dispatch(action);
}

const handleChange = (e) => {
    const { value } = e.target;
        dispatch(setFilter(value));
    };

const isDublicate = ({name, number}) => {
        return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number.toLowerCase() === number.toLowerCase());
    }

return (
    <div className={css.container}>
    <div className={css.phonebook}>
        <h2>Phoneboook</h2>
        <PhonebookAdd onSubmit={onAddContact}/>
    </div>
    <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={handleChange} />
        <Contactlist items={contacts} removeContact={onRemoveContact}/>
    </div>
    </div>
    )
}