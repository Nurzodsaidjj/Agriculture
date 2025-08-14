import React from 'react';
import { Box, Typography, Grid, Container, IconButton } from '@mui/material';
import founderImage from '../../assets/Founder.png';
import managerImage from '../../assets/Manager.png';
import designerImage from '../../assets/Designer.png';
import { Instagram, Facebook, Twitter } from "@mui/icons-material";


const Team = () => {
  const teamMembers = [
    { name: 'Giovanni Bacchio', role: 'Founder', image: founderImage },
    { name: 'Mariana Lorre', role: 'Designer', image: designerImage },
    { name: 'Riga Polaro', role: 'Manager', image: managerImage },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" color="#7eb693" fontSize={"40px"} gutterBottom>
          Our Organic Experts
        </Typography>
        <Typography variant="body2" color="#666" fontSize={"18px"} fontWeight={400} lineHeight={"165%"}>
          Simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#f9f9f9', // Fondni qo'shdim, tasvirga mos
                  borderRadius: 2,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <img
                  alt={member.name}
                  src={member.image}
                  style={{ width: 400, height: 490, objectFit: 'contain', mb: 2 }} // O'lchamlarni oshirdim
                />
                <Typography variant="h3" fontSize={"25px"} color="#274c5b">
                  {member.name}
                </Typography>
                <Typography variant="h4" fontSize={"25px"} fontWeight={800} color="#7eb693">
                  {member.role}  <IconButton>
                 <Instagram />
               </IconButton>
               <IconButton>
                 <Facebook />
               </IconButton>
                <IconButton>
                  <Twitter />
               </IconButton>
               </Typography>
              
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;