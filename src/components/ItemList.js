// src/components/ItemList.js
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const ItemList = ({ items, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <StyledCard>
            <StyledCardMedia
              image={`https://picsum.photos/300/140?random=${item.id}`}
              title={item.title}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography>
                {item.body}
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;


