// import { useFilter } from 'hooks';
import { ContactList, TextNotFind } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contactsItemSlice';
import {  contactsFilterSlice } from '../../redux'
import {  useSelector } from 'react-redux'
export const Contacts = () => {
    const filter = useSelector(contactsFilterSlice.getFilterValue);
    const { data } =  useGetContactsQuery();
    const filteredContacts = () => {
        return filter ? data.filter(
            item => item.name
                .toLowerCase()
                .includes(filter.toLowerCase())) : data;     
    }
    const contacts = filteredContacts();
    return (
        <div>
            {contacts&&contacts.length > 0 ?
                (<ContactList>
                {contacts.map(({ id, name, number }) => 
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                    />
                    )}</ContactList>) : (<TextNotFind>There is no contacts</TextNotFind >)
            }
        </div>
    )
}
