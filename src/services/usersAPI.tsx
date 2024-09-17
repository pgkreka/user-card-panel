import { Contact } from '../types';

export const fetchContacts = async (): Promise<Contact[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=6');
    
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
  
    const data: Contact[] = await response.json();  // Type the data as an array of Contact objects
    return data;
};