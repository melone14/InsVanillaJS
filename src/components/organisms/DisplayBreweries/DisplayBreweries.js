import Brewery from 'components/molecules/Brewery/Brewery';
import styled from 'styled-components';
import { useEffect } from 'react';
import useBreweries from 'hooks/useBreweries';

const Wrapper = styled.table`
  border: 1px solid red;
  padding: 10px;
`;

const TableHead = styled.thead`
  border: 1px solid green;

  tr {
    position: sticky;
    top: 10px;
  }
`;

const TableBody = styled.tbody`
  border: 1px solid blue;
`;

const DisplayBreweries = () => {
  const [breweries, setBreweries] = useBreweries();

  useEffect(() => {
    console.log(breweries);
  }, [breweries]);

  return (
    <Wrapper>
      <TableHead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Phone</th>
        </tr>
      </TableHead>
      <TableBody>
        {breweries.length > 1 ? (
          breweries.map((brewery) => (
            <Brewery key={brewery.id} brewery={brewery} />
          ))
        ) : (
          <tr>
            <td>siema</td>
          </tr>
        )}
      </TableBody>
    </Wrapper>
  );
};

export default DisplayBreweries;
