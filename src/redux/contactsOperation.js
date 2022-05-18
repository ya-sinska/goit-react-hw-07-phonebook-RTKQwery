import { createAsyncThunk} from '@reduxjs/toolkit'
import * as itemsApi from '../services/api'

export const fetchContacts = createAsyncThunk(
  'items/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const items = await itemsApi.getContacts();
      return items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const deleteContacts = createAsyncThunk(
  'items/deleteContacts',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await itemsApi.deleteContact(id);
      dispatch(fetchContacts())
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const addContacts = createAsyncThunk(
    'items/addContacts',
  async (values, { rejectWithValue, dispatch }) => {
    try {
      await itemsApi.addContact(values);
      dispatch(fetchContacts())
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)