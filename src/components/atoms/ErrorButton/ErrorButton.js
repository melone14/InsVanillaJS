import { Button } from './ErrorButton.styles';

const ErrorButton = ({ clickHandler }) => {
  return <Button onClick={clickHandler}>Fake error</Button>;
};

export default ErrorButton;
