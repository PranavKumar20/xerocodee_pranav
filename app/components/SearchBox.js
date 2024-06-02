// components/SearchBox.js
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'blue',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkblue',
  },
}));

const SearchBox = ({ placeholder }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log('Search query:', query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center">
      <TextField
        name="search"
        variant="outlined"
        size="small"
        placeholder={placeholder}
        fullWidth
        sx={{ marginRight: 1 }}
      />
      <SubmitButton type="submit" variant="contained">
        SUBMIT
      </SubmitButton>
    </Box>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBox;
