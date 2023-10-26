const endpoint = 'https://www.gov.uk/bank-holidays.json';
const ul = document.getElementById('holidays')
            
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => handleDates(data));

  function handleDates(data) {
    let bankHolidays = data;
    let england = bankHolidays["england-and-wales"].events;
    const now = new Date();
    const thisMonth = now.getUTCMonth() + 1; //months from 1-12
    const thisDay = now.getUTCDate();
    const thisYear = now.getUTCFullYear();
    const thisDate = thisYear + '-' +thisMonth + '-' +thisDay;
    const html = england.map((items)=>{
      const [year, month, date] = items.date.split("-");
      
      if(Date.parse(thisDate) <= Date.parse(items.date)){
        return `
      <li>${items.title} <br/> <span class='yellow'>(${date} / ${month} / ${year})</span>  </li>
      `;
      }
    
    }).join('');
  ul.innerHTML = html;
}