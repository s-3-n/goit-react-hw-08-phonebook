import { useEffect } from 'react';
import css from './Contacts.module.css';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selector';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/operations';
import { selectFilterSearch, selectIsLoading } from 'redux/contacts/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectFilterSearch);
  const isAuth = useSelector(selectAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContactsThunk());
    }
  }, [dispatch, isAuth]);

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.contacts}>
        <ul className={css.contactsList}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.contactListItem}>
              <div className={css.textContact}>
                <p className={css.contact}>{contact.name} : </p>
                <p className={css.contact}>{contact.number}</p>
              </div>
              <button
                className={css.contactDeleteBtn}
                onClick={() => dispatch(deleteContactThunk(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactsList;
