import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Grid, Title, Box } from "./App.styled";
import Container from '@mui/material/Container';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormValues } from 'hooks';
export const App = () => {
    
  return (
    <Container>
    <ToastContainer />
    <Box>
      <Title>Your phonebook</Title>
      <Filter />
    </Box>
      <Grid>
        <Forma btnText='Add contact' formSettings={useFormValues.useFormValues}/>
        <Contacts />
      </Grid>
    </Container>
  ) 
}