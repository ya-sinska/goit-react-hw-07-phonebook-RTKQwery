// import { useFilter } from 'hooks';
import {  TextNotFind } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contactsItemSlice';
import {  contactsFilterSlice } from '../../redux'
import { useSelector } from 'react-redux'

import * as React from 'react';
import List from '@mui/material/List';



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
                (<List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {contacts.map(({ id, name, number }) => 
                        <ContactItem
                            name={name}
                            number={number}
                            id={id}/>
                    )}</List>) : (<TextNotFind>There is no contacts</TextNotFind >)
            }
        </div>
    )
}
