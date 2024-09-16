import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;

  width: 100%;
  height: 80px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;


export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
