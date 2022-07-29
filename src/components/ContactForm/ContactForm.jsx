import React from 'react';

import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number:'',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]:value
    })
  }

  reset = () => {
    this.setState({  name: '',
    number:'',})
  }
  handelSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit({ ...this.state });
    this.reset();

  }

  // hadleInputChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handelNumberChange = event => {
    
  //   this.setState({number: event.currentTarget.value})
  // }

  render() {
    return (
      <Form onSubmit={this.handelSubmit}>
        <Label name="name">
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
