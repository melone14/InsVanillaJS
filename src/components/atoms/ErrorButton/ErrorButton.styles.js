import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  height: 47px;
  margin-right: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.red};
  color: white;
  transition: all 0.3s;
  font-weight: bold;
  font-size: 17px;

  &:hover {
    background: #ff8f8f;
    color: ${({ theme }) => theme.colors.red};
  }
`;
