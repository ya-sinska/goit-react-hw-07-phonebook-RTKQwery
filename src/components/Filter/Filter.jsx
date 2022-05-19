import { useChange } from 'hooks';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
export const Filter = () => {
    const change = useChange.useChange();
 return (

    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
         <TextField
            id="input-with-sx"
            variant="standard"
            type="text"
            name="filter" onChange={change} 
            // helperText="Please enter name"
            label="Find contacts by name"
    />
      </Box>


  
)}
