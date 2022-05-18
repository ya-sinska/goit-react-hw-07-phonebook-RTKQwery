import { Label, InputField } from './Filter.styled'
import { useChange } from 'hooks';
export const Filter = () => {
    const change = useChange.useChange();
 return (
<>
    <Label htmlFor="filter">Find contacts by name </Label>
    <InputField id="filter" type="text" name="filter" onChange={change}/>
</>    
)}
