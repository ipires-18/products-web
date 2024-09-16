import styled from 'styled-components'

export const PaginationContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`

export const PageButton = styled.button`
  background: #828ef9;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: #0056b3;
  }
`

export const PageNumber = styled.span<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  border-radius: 5px;
  background: ${({ active }) => (active ? '#828ef9' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#828ef9')};
  font-size: 1rem;
  transition: background-color 0.3s;
  &:hover {
    background: #6a4eec;
    color: white;
  }
`
