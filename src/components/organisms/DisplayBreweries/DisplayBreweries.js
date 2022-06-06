import Brewery from 'components/molecules/Brewery/Brewery';
import styled from 'styled-components';
import { useEffect } from 'react';
import useBreweries from 'hooks/useBreweries';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;
  border: 1px solid red;
`;

const TableWrapper = styled.table`
  border: 1px solid red;
  padding: 10px;
  margin: 0 auto;
  border-spacing: 30px;
`;

const TableHead = styled.thead`
  border: 1px solid green;

  tr {
    position: sticky;
    top: 0;
    background: white;

    th {
      padding: 10px 0;
      text-align: left;
    }
  }
`;

const TableBody = styled.tbody`
  border: 1px solid blue;
`;

const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 30px auto;
`;

const DisplayBreweries = () => {
  const [breweries, setBreweries] = useBreweries();

  useEffect(() => {
    console.log(breweries);
  }, [breweries]);

  return (
    <>
      <PageTitle>Breweries</PageTitle>
      <Wrapper>
        <TableWrapper>
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
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default DisplayBreweries;
