import { Item, Name, Delete } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { contactsItemSlice } from '../../redux';
export const ContactItem = ({ name, number, id }) => { 
    const [deleteContact]=contactsItemSlice.useDeleteContactsMutation()
    return (
        <Item>
            <Name>{name}:</Name>
            <>{number}</>
            <Delete onClick={() => {deleteContact(id)}}>Delete</Delete>
            </Item>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}