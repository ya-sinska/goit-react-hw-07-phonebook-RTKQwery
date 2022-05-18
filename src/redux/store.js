import { configureStore } from '@reduxjs/toolkit'
import { contactsFilterSlice } from './contactsFilterSlice'
import { contactsItemSlice } from './contactsItemSlice';

export const store = configureStore({
    reducer: {
        items: contactsItemSlice.reducer,
        filter: contactsFilterSlice.reducer,
    },
});



