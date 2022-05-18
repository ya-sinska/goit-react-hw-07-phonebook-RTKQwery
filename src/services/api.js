import axios from 'axios';

axios.defaults.baseURL = 'https://62829a3638279cef71ca32ce.mockapi.io';

export const addContact = async values => {
  const {data} = await axios.post('/contacts', values);
  return data;
};

export const getContacts = async () => {
  const {data} = await axios.get('/contacts');
  return data;    
};

export const deleteContact = async id => {
  const {data} = await axios.delete(`/contacts/${id}`);
  return data;
};

