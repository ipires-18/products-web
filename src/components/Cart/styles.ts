import styled from 'styled-components';

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CartButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CartDropdown = styled.div`
  position: absolute;
  top: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const ItemName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const ItemQuantity = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

export const ItemPrice = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888;
`;

export const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #cc0000;
  }
`;

export const ClearCartButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;

  &:hover {
    background-color: #cc0000;
  }
`;

export const AddCartButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-weight: 600;

  &:hover {
    background-color: #0056;
  }
`;
