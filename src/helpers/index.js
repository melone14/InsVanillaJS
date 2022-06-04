import axios from 'axios';

export const getBreweries = async (url) => {
  try {
    const response = await axios.get(
      'https://api.openbrewerydb.org/breweries?per_page=50&page=1'
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
