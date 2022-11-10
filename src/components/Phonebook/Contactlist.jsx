import { getFilter } from "redux/filter/filter-selectors";
import { getContacts} from "redux/contacts/contacts-selectors";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contacts/contacts-slice";
import css from "./Phonebook.module.css";


export default function Contactlist() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
}

const getFilteredContacts = () => {
  if(!filter) {
  return contacts;
}

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
  const normalizedName = name.toLocaleLowerCase();
  const result = normalizedName.includes(normalizedFilter);
  return result;
  })

  return filteredContacts;
}

const filteredContacts = getFilteredContacts();
const elements = filteredContacts.map(({ name, number, id }) => {
    return <li className={css.contactlist} key={id}> {name}: {number} <span className={css.contactlist__button} onClick={() => onRemoveContact(id)}>Delete</span></li>
  })
  return (
    <ul>{elements}</ul>
  )
}
