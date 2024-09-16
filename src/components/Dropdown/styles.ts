import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  z-index: 12;
`;

export const DropdownHeader = styled.div`
  padding: 7px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const Arrow = styled.span<{ $isOpen: boolean }>`  // Usando a prop transitória $isOpen
  display: inline-block;
  margin-left: 10px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li<{ disabled?: boolean }>`
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  color: ${({ disabled }) => (disabled ? '#999' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#f0f0f0')};
  }
`;
