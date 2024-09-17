import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { Contact } from '../../types'; // Importing Contact interface from types
import styles from './../../components/ContactModal/ContactModal.module.css'; // Import the CSS module

interface ContactModalProps {
  contact: Contact | null;
  open: boolean;
  handleClose: () => void;
}

export default function ContactModal({ contact, open, handleClose }: ContactModalProps) {
  if (!contact) return null; // If no contact is provided, do not render

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="contact-modal">
      <Box className={styles.modalStyle}>
        {/* Header Section */}
        <Box className={styles.headerStyle}>
          <Box>
            <Typography variant="h6" component="h2">
              {contact.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {contact.company.name}
            </Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content Section */}
        <Box className={styles.contentStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="span" className={styles.labelStyle}>Username:</Typography>
              <Typography>{contact.username}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span" className={styles.labelStyle}>Address:</Typography>
              <Typography>
                {contact.address.street}, {contact.address.city}
                <br />
                {contact.address.suite}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span" className={styles.labelStyle}>Phone:</Typography>
              <Typography>{contact.phone}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span" className={styles.labelStyle}>Email:</Typography>
              <Typography>{contact.email}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography component="span" className={styles.labelStyle}>Website:</Typography>
              <Typography>{contact.website}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}