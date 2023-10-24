//transport services
const axios = require('axios');

// Your API key
const apiKey = jZWuIvXD5d9f0fGGe0wFAQ;

// API endpoint
const apiUrl = 'https://bus-api.blablacar.com'

// Create headers with the API key
const headers = {
  Authorization: `Bearer ${apiKey}`
};

// Make a GET request to the API
axios.get(apiUrl, { headers })
  .then(response => {
    // Handle the API response
    console.log('API Response:', response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('API Error:', error);
  });
