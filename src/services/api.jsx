import axios from "axios";

const keyApi = "175165a6952a2064d8eb4ea274c5f82f";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

export const getWeatherNow = async (city = "Kyiv") => {
  const res = await axios.get(`/weather?q=${city}&appid=${keyApi}`);
  return res.data;
};
