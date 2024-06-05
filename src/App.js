// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import axios from 'axios';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import AppBarComponent from './components/AppBar';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setItems(response.data);
        setFilteredItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <AppBarComponent />
      <StyledContainer>
        <Box my={4}>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <ItemList items={filteredItems} loading={loading} />
        </Box>
      </StyledContainer>
    </>
  );
};

export default App;


