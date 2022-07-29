
import {ItemContact, Text, Button, List} from './ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({name, number, id}) => {
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