import axios from 'axios';

const API_BASE_URL = 'https://bluapi.aas.technology/api/contact';

export const createContact = async (contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createcontact`, contactData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};