import StatusBar from "../contacts/StatusBar";
import ContactList from "../contacts/ContactList";
import Footer from "../contacts/Footer";

import "../contacts/ContactsBook.css";

function ContactsBook() {
  return (
    <div className="contacts-book">
      <StatusBar />
      <ContactList />
      <Footer />
    </div>
  );
}

export default ContactsBook;
