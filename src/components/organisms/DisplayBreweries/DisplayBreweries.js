import Brewery from 'components/molecules/Brewery/Brewery';
import { useEffect, useState } from 'react';
import useBreweries from 'hooks/useBreweries';
import ReactPaginate from 'react-paginate';
import {
  Wrapper,
  TableWrapper,
  TableHead,
  TableBody,
} from './DisplayBreweries.styles';
import PageTitle from 'components/atoms/PageTitle/PageTitle';

function DisplayBreweries({ itemsPerPage }) {
  const [breweries] = useBreweries();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [viewItemsPerPage, setViewItemsPerPage] = useState(itemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + viewItemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / itemsPerPage));
  }, [itemOffset, breweries, viewItemsPerPage, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * viewItemsPerPage) % breweries.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleSelectChange = (e) => {
    console.log(typeof parseInt(e.target.value));
    setViewItemsPerPage(parseInt(e.target.value));
  };

  return (
    <Wrapper>
      <PageTitle>Breweries</PageTitle>
      <select onChange={handleSelectChange} defaultValue="10">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
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
