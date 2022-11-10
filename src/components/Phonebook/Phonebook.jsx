import PhonebookAdd from "./PhonebookAdd";
import Contactlist from "./Contactlist";
import Filter from "./Filter";
import css from "./Phonebook.module.css";

export default function Phonebook() {
return (
    <div className={css.container}>
    <div className={css.phonebook}>
        <h2>Phoneboook</h2>
        <PhonebookAdd/>
    </div>
    <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter/>
        <Contactlist/>
    </div>
    </div>
    )
}