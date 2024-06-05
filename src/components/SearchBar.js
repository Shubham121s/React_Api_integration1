// src/components/SearchBar.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Box my={3}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={onSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
