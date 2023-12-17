import axios from "axios";

const API_KEY = "d556686e3da9e5642a2adf7e1c567798";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  try {
    let response = await axios.get(
      `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("Error while calling the api ", error.message);
    return error.response;
  }
};
