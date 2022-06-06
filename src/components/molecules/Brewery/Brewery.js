import styled from 'styled-components';

const Wrapper = styled.tr`
  padding: 10px;
  margin: 10px 0;
`;

const Brewery = ({ brewery: { name, brewery_type, phone, index } }) => {
  return (
    <Wrapper>
      <td>{index}</td>
      <td>{name}</td>
      <td>{brewery_type}</td>
      <td>{phone ? phone : 'unknown'}</td>
    </Wrapper>
  );
};

export default Brewery;
