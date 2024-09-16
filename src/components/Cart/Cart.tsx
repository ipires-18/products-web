import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import * as Styled from './styles';

export const Cart: React.FC = () => {
  const { cart, clearCart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Styled.CartContainer>
      <Styled.CartButton onClick={() => setIsOpen(!isOpen)}>
        Cart ({cart.length})
      </Styled.CartButton>
      {isOpen && (
        <Styled.CartDropdown>
          <ul>
            {cart.length > 0 ? (
              cart.map(item => (
                <Styled.CartItem key={item.id}>
                  <Styled.ItemDetails>
                    <Styled.ItemName>{item.name}</Styled.ItemName>
                    <Styled.ItemQuantity>Quantity: {item.quantity}</Styled.ItemQuantity>
                    <Styled.ItemPrice>R$ {item.price.toFixed(2)}</Styled.ItemPrice>
                  </Styled.ItemDetails>
                  <Styled.RemoveButton onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Styled.RemoveButton>
                </Styled.CartItem>
              ))
            ) : (
              <li>Cart is empty</li>
            )}
          </ul>
          {cart.length > 0 && (
            <Styled.ClearCartButton onClick={handleClearCart}>
              Clear Cart
            </Styled.ClearCartButton>
          )}
        </Styled.CartDropdown>
      )}
    </Styled.CartContainer>
  );
};
