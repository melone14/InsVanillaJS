import Brewery from 'components/molecules/Brewery/Brewery';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getBreweries } from 'helpers';

const Wrapper = styled.table`
  border: 1px solid red;
  padding: 10px;
`;

const TableHead = styled.thead`
  border: 1px solid green;
`;

const TableBody = styled.tbody`
  border: 1px solid blue;
`;

const DisplayBreweries = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    getBreweries();

    console.log(breweries);
    setBreweries([{ name: 'xyz' }]);
  }, []);

  return (
    <Wrapper>
      <TableHead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </TableHead>
      <TableBody>
        <Brewery />
        <Brewery />
        <Brewery />
      </TableBody>
    </Wrapper>
  );
};

export default DisplayBreweries;
