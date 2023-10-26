const fs = require('fs');


fs.readFile('db.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  try {

    const jsonData = JSON.parse(data);

    const holidays = jsonData.holidays;
    holidays.forEach((holiday) => {
      console.log(`Title: ${holiday.title}, Date: ${holiday.date}`);
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
etch('db.json')
  .then((response) => response.json())
  .then((data) => {
    
    const movieTitles = data.vacation.map((holidays) => vacay.title);
    
  
    const movieList = document.createElement('ul');
    movieTitles.forEach((title) => {
      const listItem = document.createElement('li');
      listItem.textContent = title;
      holiday.appendChild(listItem);
    });

    
    document.body.appendChild(vacation);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
     // Event listener for the button
     const displayWinterButton = document.getElementById('displayWinterButton');
     displayWinterButton.addEventListener('click', () => {
         // Fetch data by "id"
         const winterStart = jsonData.holidays.find(holiday => vacay.id === 'winterstart');
         const winterEnd = jsonData.holidays.find(holiday => vacay.id === 'winterend');

         // Display the data
         const winterDates = document.getElementById('winterDates');
         winterDates.innerHTML = `
             <p>Winter Start Date: ${winterStart.date}</p>
             <p>Winter End Date: ${winterEnd.date}</p>
         `;
     });
  cath (error) {
     console.error('Error parsing JSON:', error);
 }
;
