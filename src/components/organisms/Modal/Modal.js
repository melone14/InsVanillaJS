import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  CloseButton,
  ErrorDescription,
  ErrorName,
  ModalWrapper,
} from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ErrorName>Error XYZ</ErrorName>
      <ErrorDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab aperiam
        quidem unde. Ipsa, officia quos pariatur consequuntur unde minima
        commodi ut eligendi saepe non tempora quae vero quaerat voluptatibus.
      </ErrorDescription>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
