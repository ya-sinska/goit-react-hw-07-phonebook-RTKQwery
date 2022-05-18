import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { contactsFilterSlice, contactsItemSlice, contactsOperation} from '../redux';
export const useFilter = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(contactsOperation.fetchContacts()) }, [dispatch]);

    const items = useSelector(contactsItemSlice.getItemsValue);
    const filter = useSelector(contactsFilterSlice.getFilterValue);

    const filteredContacts = filter ? items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())) : items; 
    
    return filteredContacts;   
}