import React from 'react';
import { useCart } from '@/context/CartContext';
import * as Styled from './styles';


interface AddToCartButtonProps {
  item: {
    id: number;
    name: string;
    price: number;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ item: { id, name, price } }) => {
  const { addToCart } = useCart();

  const item = {
    id,
    name: name || 'Nome não disponível',
    price: price || 0,
  };

  const handleClick = () => {
    addToCart({
      ...item,
      quantity: 1,
    });
  };

  return (
    <Styled.AddCartButton onClick={handleClick}>Adicionar ao Carrinho</Styled.AddCartButton>
  );
};

export default AddToCartButton;
