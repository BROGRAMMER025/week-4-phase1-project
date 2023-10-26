const endpoint = 'https://www.gov.uk/bank-holidays.json';
fetch(endpoint)
fetch(endpoint).then((response)=>console.log(response));
fetch(endpoint)
     .then((response) => response.json())
     .then((data) => console.log(data));
