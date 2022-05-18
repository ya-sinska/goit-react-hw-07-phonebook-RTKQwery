import { createSlice } from '@reduxjs/toolkit'
import {fetchContacts, deleteContacts, addContacts} from './contactsOperation';
// Slice Items
const initialState = {
    value: [],
    loading: false,
    error: null,
}
export const contactsItemSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: (builder) => {
    builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchContacts.fulfilled, (state, {payload}) => { 
            state.loading = false;
            state.value = payload;
        })
        .addCase(fetchContacts.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;          
        })
        .addCase(deleteContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteContacts.fulfilled, (state) => { 
            state.loading = false;
        })
        .addCase(deleteContacts.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;          
        }) 
        .addCase(addContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addContacts.fulfilled, (state) => { 
            state.loading = false;
        })
        .addCase(addContacts.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;          
        }) 
    },
});

// Selectors
export const getItemsValue = (state) => state.items.value;