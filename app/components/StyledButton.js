import { Button } from "@mui/material";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme, active }) => ({
  backgroundColor: active ? 'blue' : 'white',
  border: '1px solid gray',
  color: active ? 'white' : 'black',
  '&:active': {
    backgroundColor: 'blue',
    color: 'white'
  }
}));

export default StyledButton;
