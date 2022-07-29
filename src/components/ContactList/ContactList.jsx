import { nanoid } from "nanoid";
import {ItemContact, Text, Button} from './ContactList.styled'

export const ContactList = ({ contacts }) => {
    return (
        <>
            {contacts.map(({name, number}) => {
                return (
                    <ItemContact id={nanoid()}>
                        <Text>{name}: {number}</Text>
                        <Button type="button">Delete</Button>
                 </ItemContact>
             )
         })}   
        </>
    )
}