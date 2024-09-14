import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  background-color: #828ef9;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #6a4eec;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
