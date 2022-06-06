import { useEffect, useState } from 'react';
import axios from 'axios';

const useBreweries = (url) => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const getBreweries = async () => {
      try {
        const response = await axios.get(
          'https://api.openbrewerydb.org/breweries?per_page=50&page=1'
        );
        setBreweries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getBreweries();
  }, [url]);

  return [breweries, setBreweries];
};

export default useBreweries;
