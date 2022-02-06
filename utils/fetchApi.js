import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ad86fd9dd1mshc1a61e42bd929a0p170f9fjsnde0c2f2b7a19",
    },
  });
  return data;
};
