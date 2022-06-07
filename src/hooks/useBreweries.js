import { useEffect, useState } from 'react';
import axios from 'axios';

const useBreweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [url, setUrl] = useState(
    'https://api.openbrewerydb.org/breweries?per_page=50&page=1'
  );

  const fakeErrorToggle = () => {
    if (url === 'https://api.openbrewerydb.org/breweries?per_page=50&page=1') {
      setUrl('fakeurlhehe');
    } else {
      setUrl('https://api.openbrewerydb.org/breweries?per_page=50&page=1');
    }
  };

  useEffect(() => {
    const getBreweries = async () => {
      try {
        const response = await axios.get(url);

        const indexedData = response.data.map((brewery, index) => ({
          ...brewery,
          index: index + 1,
        }));

        setBreweries(indexedData);
      } catch (error) {
        setBreweries([]);
        console.error(error);
      }
    };

    getBreweries();
  }, [url]);

  return [breweries, fakeErrorToggle];
};

export default useBreweries;
