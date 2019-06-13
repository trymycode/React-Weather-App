const API_URL = 'http://api.openweathermap.org/data/2.5/weather?';


async function getWeather(lat, lon){
  try{
    const response = await fetch(`${API_URL}lat=${lat}&lon=${lon}&appid=5efe8c1f61821a7b6f00170e77ec230c`);
    const res_data = await response.json();
    return res_data;
  }
  catch(err){
    console.log(err);
    return err;
  }
}
export default getWeather;