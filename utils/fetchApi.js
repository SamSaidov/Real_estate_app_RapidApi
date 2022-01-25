import axios from "axios";
//new edit here2
//new edit here

export const baseUrl = "https://bayut.p.rapidapi.com";

//function that accepts url to fetch
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "process.env.apikey",
    },
  });
  return data;
};
