import styled from 'styled-components';

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border: 0;
  width: 120px;
  height: 36px;
  border-radius: 4px;
  padding: 5px;
  color: #fff;
  font-weight: bold;

  & + button {
    margin-left: 10px;
    background: #ee4d64;
  }

  svg {
    margin-right: 10px;
  }
`;