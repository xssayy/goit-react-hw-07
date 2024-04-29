import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";

import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error</p>}
      <ul className={style.contactList}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={style.contact}>
              <Contact contact={contact} key={contact.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
