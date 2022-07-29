import React from "react";
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList'
class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  onSubmitForm = ({name, number} ) => {
     const contact = { name, number };
    this.setState(({ contacts }) => {
       console.log([contact, ...contacts])
      return { contacts: [contact, ...contacts] }
    })
  }
  render() {
    return (
       <div>
    <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm } />
 
   <h2>Contacts</h2>
{/* {/* //   <Filter ... /> */}
   <ContactList contacts={this.state.contacts} />  
 </div>

    )
  }

}

export default App;