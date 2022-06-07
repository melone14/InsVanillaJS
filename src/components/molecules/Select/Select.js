import { SelectWrapper } from './Select.styles';

const Select = ({ changeHandler }) => {
  return (
    <SelectWrapper onChange={changeHandler} defaultValue="10">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="25">25</option>
    </SelectWrapper>
  );
};

export default Select;
