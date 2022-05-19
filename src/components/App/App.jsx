import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Grid, Title, SecondTitle, Background } from "./App.styled";
import Container from '@mui/material/Container';

export const App = () => {
  
  return (
    <Background>
    <Container>
      <Title>Phonebook</Title>
      <Grid>
      <div>
        <Forma />
      </div>
      <div>
        <SecondTitle>Contacts</SecondTitle>
        <Filter/>
        <Contacts />
      </div>
        
    </Grid>
    </Container>        
    </Background>
  
  ) 
}