import { useSelector } from "react-redux";
import { FcReadingEbook } from 'react-icons/fc';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Message from '../Message/Message';
import css from './App.module.css';
function App() {
 const contactsItems = useSelector(state => state.contacts.items);

  return (
  
      <div className={css.container}>
        <h1>
          <FcReadingEbook className={css.icon} /> Phonebook
        </h1>
      <ContactForm />
      {contactsItems.length !== 0 ? (
            <>
        <SearchBox />
          <ContactList />
        </>
          ) : (
            <Message message="Please add your first contact to the empty phonebook!" />
          )}
      </div>
 
  );
}

export default App;