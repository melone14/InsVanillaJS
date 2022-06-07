import styled from 'styled-components';

export const SelectWrapper = styled.select`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 14px;
  border-radius: 12px;
  outline: none;
`;
