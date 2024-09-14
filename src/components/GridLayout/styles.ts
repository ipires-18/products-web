import styled from 'styled-components'

export const GridLayout = styled.main`
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  a {
    text-decoration: none;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`

export const GridLayoutSelector = styled.select`
  margin: 20px;
  padding: 10px 12px;
  font-size: 16px;
  border: 2px solid #828ef9;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  appearance: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #6f6f6f;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.2);
  }

  option {
    background-color: #fff;
  }
`
