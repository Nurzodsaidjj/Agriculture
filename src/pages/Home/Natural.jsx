import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import NaturalBg from '../../assets/fruit.png'; 
import VeggieBg from '../../assets/veggie.png'; 

export default function Natural() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap', 
          mb: "190px",
        }}
      >
  
        <Box
          sx={{
            width: { xs: '100%', md: '48%' },
            height: '370px',
            backgroundImage: `url(${NaturalBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              p: 3,
              color: '#fff',
            }}
          >
          </Box>
        </Box>


        <Box
          sx={{
            width: { xs: '100%', md: '48%' }, 
            height: '370px',
            backgroundImage: `url(${VeggieBg || NaturalBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              p: 3,
              color: '#2e7d32',
            }}
          >
          </Box>
        </Box>
      </Box>
    </Container>
  );
}