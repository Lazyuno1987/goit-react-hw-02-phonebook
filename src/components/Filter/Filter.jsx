import {Label, Input} from './Filter.styled'

 const Filter = ({ value, onChange }) => {
  return( 
    <>
         <Label>Find the contact
            <Input type="text"
            value={value}
            onChange={onChange}
            />
    </Label>
   
    </>)
}
export default Filter;