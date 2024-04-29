import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={style.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={style.contact}>
            <Contact contact={contact} key={contact.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
