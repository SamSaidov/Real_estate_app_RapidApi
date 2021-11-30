import axios from "axios";
//new edit here2
//new edit here

export const baseUrl = "https://bayut.p.rapidapi.com";

//function that accepts url to fetch
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d93c9fcd08msh9e6677eabcf2855p1539dejsnb7590da107b5",
    },
  });
  return data;
};
