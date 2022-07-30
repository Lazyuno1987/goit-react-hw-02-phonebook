
import { ItemContact, Text, Button, List } from './ContactList.styled'
import PropTypes from "prop-types";
export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ name, number, id }) => {
                return (
                    
                    <ItemContact key={id}>
                        <Text>{name}:   {number}</Text>
                        <Button onClick={()=>onDeleteContact(id)} type="button">Delete</Button>
                        </ItemContact>
                        
             )
         })}   
     </List>
    )
}

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
     contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
   }
   

