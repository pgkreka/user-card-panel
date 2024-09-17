import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContactModal from '../ContactModal/ContactModal';
import { Contact } from '../../types'; // Importing Contact interface from types
import supervisorIcon from '../../assets/icons/icon-supervisor.svg';
import styles from './../../components/ContactCard/ContactCard.module.css';

interface ContactCardProps {
    contact: Contact;
    open: boolean;
    handleClose: () => void;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Card className={styles.cardStyle} variant="outlined" sx={{ m: 2, boxShadow: 3, position: 'relative' }}>
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
          <div className="icon" onClick={handleOpen}>
            <img src={supervisorIcon} alt="magnifier icon" />
          </div>
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