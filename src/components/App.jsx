import React from "react";
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList'
import Filter from './Filter/Filter'
class App extends React.Component {
  state = {
    contacts: [],
    filter:'',
  }

  onSubmitForm = ({ name, number }) => {

     const contact = { name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] }
    })
  }

 changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  render() {
       
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter(contact => contact.name.includes(normalizedFilter));
    console.log(filterContact)

    return (
       <div>
    <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm } />
 
   <h2>Contacts</h2>
   <Filter value={this.state.filter}
          onChange={this.changeFilter } />
   <ContactList contacts={filterContact} />  
 </div>

    )
  }

}

export default App;