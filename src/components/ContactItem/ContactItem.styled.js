import styled from "@emotion/styled";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';

export const Item = styled(ListItem)`
&:not(:last-child){
    margin-bottom:10px;
}
min-width:370px;
`
export const AvatarIcon = styled(Avatar)`
margin-right:10px;
`
export const Name = styled.span`
text-transform: capitalize;
`
export const Delete = styled(DeleteIcon)`
margin-right: -10px; 
margin-left: 4px;
`
export const BtnDelete = styled(Button)`
min-width:40px;
`