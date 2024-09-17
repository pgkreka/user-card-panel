import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import ContactCard from './components/ContactCard/ContactCard';
import { fetchContacts } from './services/usersAPI'; // Import the API function
import { Contact } from './types';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch contacts from the API
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();  // Use the function from usersAPI.js
        setContacts(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadContacts();
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ my: 4 }}>
        Contacts Application
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        View basic info of contacts in a 3x2 layout. Click on the magnifier icon to open a modal and view detailed contact info.
      </Typography>
      <Grid container spacing={2}>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} key={contact.id}>
            <ContactCard contact={contact} open={false} handleClose={function (): void {
              throw new Error('Function not implemented.');
            } } />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;