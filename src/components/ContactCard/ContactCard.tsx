import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactModal from '../ContactModal/ContactModal';
import { Contact } from '../../types'; // Importing Contact interface from types

interface ContactCardProps {
    contact: Contact;  // Accept the Contact type as a prop
    open: boolean;
    handleClose: () => void;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Card variant="outlined" sx={{ m: 2, boxShadow: 3, position: 'relative' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {contact.name}
          </Typography>
          <Typography color="text.secondary">
            Company: <b>{contact.company.name}</b>
          </Typography>
          <Typography color="text.secondary">E-mail: {contact.email}</Typography>
        </CardContent>
        <Box position="absolute" bottom={10} right={10}>
          <IconButton onClick={handleOpen}>
            <SearchIcon sx={{ fontSize: 40, color: '#00acc1' }} />
          </IconButton>
        </Box>
      </Card>

      <ContactModal
        contact={contact}
        open={openModal}
        handleClose={handleClose}
      />
    </>
  );
}