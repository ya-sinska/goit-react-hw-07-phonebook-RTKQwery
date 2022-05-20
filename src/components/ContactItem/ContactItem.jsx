import { Item, BtnDelete, Delete, AvatarIcon, Name } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { contactsItemSlice } from '../../redux';
import { useEffect} from "react";
import { sucsessDelete, errorDelete } from "utils/notification";

export const ContactItem = ({ name, number, id}) => { 
    const [deleteContact, { isLoading, isSuccess, isError }] = contactsItemSlice.useDeleteContactsMutation();
    useEffect(() => {
        isSuccess && sucsessDelete();
        isError && errorDelete();
       }, [isError, isSuccess]);
    
    return (
        <Item onClick={()=>{}}>
            <AvatarIcon>{name.charAt(0).toUpperCase()}</AvatarIcon>
            <Name primary={`${name}: ${number}`} />
            <BtnDelete
                disabled={isLoading}
                onClick={() => { deleteContact(id) }}
                variant="outlined"
                startIcon={<Delete />} />
        </Item> 
    
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}