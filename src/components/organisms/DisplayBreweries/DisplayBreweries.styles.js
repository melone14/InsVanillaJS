import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;

  .pagination {
    width: 90%;
    max-width: 1000px;
    margin: 40px auto;
    list-style: none;
    display: flex;
    justify-content: center;

    .page-item {
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.lightGray};

      margin: 0 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      color: black;
      font-weight: 500;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:first-child,
      &:last-child {
        width: 150px;
      }

      &.active,
      &:hover {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: white;
      }

      &.disabled {
        background: ${({ theme }) => theme.colors.smokedWhite};
        border: 1px solid ${({ theme }) => theme.colors.lightGray};
        color: ${({ theme }) => theme.colors.lightGray};
        cursor: not-allowed;
      }
    }
  }
`;

export const TableWrapper = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 10px;
  margin: 0 auto;
  border-spacing: 2px;
`;

export const TableHead = styled.thead`
  border: 1px solid green;

  tr {
    position: sticky;
    top: 0;
    background: white;

    th {
      padding: 12px 8px;
      text-align: left;
    }
  }
`;

export const TableBody = styled.tbody`
  border: 1px solid blue;

  td {
    padding: 12px 18px;
  }

  tr {
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export const PageTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin: 30px auto;
`;

export const FeaturesWrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
