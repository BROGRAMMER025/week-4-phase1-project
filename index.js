const busUrl = 'https://api.wheretheiss.at/v1/satellites'
async function  getLoc(){
  const response = await fetch('https://api.wheretheiss.at/v1/satellites')
  const data = await response.json()
  console.log(data)
}
getLoc()