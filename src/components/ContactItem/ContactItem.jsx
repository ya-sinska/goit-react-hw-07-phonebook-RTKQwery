import { Item, BtnDelete, Delete, AvatarIcon, Name } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { contactsItemSlice } from '../../redux';




export const ContactItem = ({ name, number, id }) => { 
    const [deleteContact]=contactsItemSlice.useDeleteContactsMutation()
    return (
        <Item>
            <AvatarIcon>{name.charAt(0).toUpperCase()}</AvatarIcon>
            <Name primary={`${name}: ${number}`} />
            <BtnDelete onClick={() => {deleteContact(id)}} variant="outlined" startIcon={<Delete />}/>
        </Item>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}