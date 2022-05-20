import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Grid, Title, Box } from "./App.styled";
import Container from '@mui/material/Container';

export const App = () => {
  
  return (
    <Container>
    <Box>
      <Title>Your phonebook</Title>
      <Filter />
    </Box>
      <Grid>
        <Forma />
        <Contacts />
      </Grid>
      
    </Container>
    
  
  ) 
}