// Define the API URL
const apiUrl = 'airport-web.appspot.com/_ah/api ';

// Make a GET request using the fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    // Process the API response data here
    console.log('API Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
