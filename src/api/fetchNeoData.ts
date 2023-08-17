export const getNeoData = async (currentDate: Date) => {

  const today = currentDate
  const tomorow = new Date(today.getTime() + (24 * 60 * 60 * 1000))

  const currentYear = today.getFullYear().toString();
  const currentMonth = (today.getMonth() + 1).toString();
  const currentDay = today.getDate().toString();

  const endYear = tomorow.getFullYear().toString();
  const endMonth = (tomorow.getMonth() + 1).toString();
  const endDay = tomorow.getDate().toString();



  const r = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentYear + "-" + currentMonth + '-' + currentDay}&end_date=${currentYear + "-" + currentMonth + '-' + currentDay}&api_key=AqvmR4FG8gp6t7pExroZLN0y3DrLxqN192auay6v`
  )
  if (!r.ok) {
    throw new Error('Cant get data')
  }
  const res = await r.json()
  return res.near_earth_objects
}