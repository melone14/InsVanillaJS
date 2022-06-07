import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 550px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 0 30px;
`;

export const CloseButton = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.colors.red};
  background: white;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  font-weight: bold;
`;

export const ErrorName = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  margin: 15px 0;
  font-size: 22px;
`;

export const ErrorDescription = styled.p`
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  margin: 15px 0;
  font-size: 18px;
`;
