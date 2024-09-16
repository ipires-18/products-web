'use client';
import React, { useState } from 'react';
import * as Styled from './styles';
import { Button } from '@/components/Button/button'
import { useProducts } from '@/context/ProductsContext';

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const { searchProducts } = useProducts();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    searchProducts(query);
  };

  return (
    <Styled.Container>
      <Styled.Input placeholder='Enter a product...' value={query} onChange={handleInputChange} />
      <Button title='Search' onClick={handleSearch} />
    </Styled.Container>
  );
};
