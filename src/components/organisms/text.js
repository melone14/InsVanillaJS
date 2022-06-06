import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import useBreweries from 'hooks/useBreweries';

const items = [
  {
    id: 'banjo-brewing-fayetteville',
    name: 'Banjo Brewing',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Fayetteville',
    state: 'West Virginia',
    county_province: null,
    postal_code: '25840',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '3042164231',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'barrel-brothers-brewing-company-windsor',
    name: 'Barrel Brothers Brewing Company',
    brewery_type: 'micro',
    street: '399 Business Park Ct Ste 506',
    address_2: null,
    address_3: null,
    city: 'Windsor',
    state: 'California',
    county_province: null,
    postal_code: '95492-6652',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '7076969487',
    website_url: 'http://www.barrelbrothersbrewing.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'bay-brewing-company-miami',
    name: 'Bay Brewing Company',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Miami',
    state: 'Florida',
    county_province: null,
    postal_code: '33130-3488',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '18134763767',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'bent-shovel-brewing-oregon-city',
    name: 'Bent Shovel Brewing',
    brewery_type: 'micro',
    street: '21678 S Latourette Rd',
    address_2: null,
    address_3: null,
    city: 'Oregon City',
    state: 'Oregon',
    county_province: null,
    postal_code: '97045-9453',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5038980220',
    website_url: 'http://www.bentshovelbrewing.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'snow-belt-brew-chardon',
    name: 'Snow Belt Brew',
    brewery_type: 'micro',
    street: '9511 Kile Rd',
    address_2: null,
    address_3: null,
    city: 'Chardon',
    state: 'Ohio',
    county_province: null,
    postal_code: '44024',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'boring-brewing-co-llc-boring',
    name: 'Boring Brewing Co., LLC',
    brewery_type: 'micro',
    street: '29300 SE Haley Road Ste B',
    address_2: null,
    address_3: null,
    city: 'Boring',
    state: 'Oregon',
    county_province: null,
    postal_code: '97009',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5034278619',
    website_url: 'http://www.boringbrewing.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'brubakers-brewery-and-pub-sylvania',
    name: "Brubaker's Brewery & Pub",
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Sylvania',
    state: 'Ohio',
    county_province: null,
    postal_code: '43560-9586',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'camino-brewing-co-llc-san-jose',
    name: 'Camino Brewing Co LLC',
    brewery_type: 'micro',
    street: '718 S 1st St',
    address_2: null,
    address_3: null,
    city: 'San Jose',
    state: 'California',
    county_province: null,
    postal_code: '95113',
    country: 'United States',
    longitude: '-121.8823478',
    latitude: '37.32530178',
    phone: null,
    website_url: 'http://www.caminobrewing.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: 'cape-ann-lanes-gloucester',
    name: 'Cape Ann Lanes',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Gloucester',
    state: 'Massachusetts',
    county_province: null,
    postal_code: '01930-2256',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '9788799714',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
];

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [breweries, setBreweries] = useBreweries();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, breweries]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="items">
        {currentItems &&
          currentItems.map((brewery) => (
            <div key={brewery.id}>{brewery.name}</div>
          ))}
      </div>
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
    </>
  );
}

export default PaginatedItems;
