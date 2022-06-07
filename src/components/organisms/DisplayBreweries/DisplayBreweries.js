import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Brewery from 'components/molecules/Brewery/Brewery';
import {
  Wrapper,
  TableWrapper,
  TableHead,
  TableBody,
  FeaturesWrapper,
} from './DisplayBreweries.styles';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import Select from 'components/molecules/Select/Select';
import useBreweries from 'hooks/useBreweries';
import ErrorButton from 'components/atoms/ErrorButton/ErrorButton';

function DisplayBreweries({ itemsPerPage }) {
  const [breweries, fakeErrorToggle] = useBreweries();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [viewItemsPerPage, setViewItemsPerPage] = useState(itemsPerPage);

  useEffect(() => {
    const endOffset = itemOffset + viewItemsPerPage;
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / viewItemsPerPage));
  }, [itemOffset, breweries, viewItemsPerPage, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * viewItemsPerPage) % breweries.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (e) => {
    setViewItemsPerPage(parseInt(e.target.value));
  };

  return (
    <Wrapper>
      <PageTitle>Breweries</PageTitle>
      <FeaturesWrapper>
        <ErrorButton clickHandler={fakeErrorToggle} />
        <Select changeHandler={handleSelectChange} />
      </FeaturesWrapper>
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
              <td>
                <LoadingSpinner />
              </td>
              <td>
                <LoadingSpinner />
              </td>
              <td>
                <LoadingSpinner />
              </td>
              <td>
                <LoadingSpinner />
              </td>
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
