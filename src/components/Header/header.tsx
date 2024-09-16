'use client';
import React from 'react';
import * as Styled from './styles';
import { Dropdown } from '@/components/Dropdown/dropdown';
import { SearchInput } from '@/components/SearchInput/search-input';
import { useProducts } from '@/context/ProductsContext';
import { api } from '@/tools/api';
import { Cart } from '@/components/Cart/Cart';

export const Header: React.FC = () => {
  const { categories, setProducts } = useProducts();

  const options = categories.map(category => ({
    label: category,
    value: category,
  }));

  const onSelect = async (value: string) => {
    const response = await api.get(`/products/category?type=${value}`);
    setProducts(response.data.products);
  }

  return (
    <Styled.Container>
      <Cart/>
      <Styled.Header>
        <Dropdown placeholder="Select category" options={options} onSelect={onSelect} />
        <SearchInput />
      </Styled.Header>
    </Styled.Container>
  );
};
