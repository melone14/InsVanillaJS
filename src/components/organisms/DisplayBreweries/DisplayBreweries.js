import Brewery from 'components/molecules/Brewery/Brewery';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useBreweries from 'hooks/useBreweries';
import ReactPaginate from 'react-paginate';

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

function DisplayBreweries({ itemsPerPage }) {
  const [breweries, setBreweries] = useBreweries();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, breweries]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % breweries.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Wrapper>
      <TableWrapper>
        <TableHead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Phone</th>
          </tr>
        </TableHead>
        <TableBody>
          {breweries.length > 1 ? (
            currentItems.map((brewery) => (
              <Brewery key={brewery.id} brewery={brewery} />
            ))
          ) : (
            <tr>
              <td>siema</td>
            </tr>
          )}
        </TableBody>
      </TableWrapper>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </Wrapper>
  );
}

export default DisplayBreweries;
