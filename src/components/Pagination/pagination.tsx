'use client'

import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import { api } from '@/tools/api';
import { useProducts } from '@/context/ProductsContext';

const totalPages = 10;

export const Pagination: React.FC = () => {
  const { setProducts } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPageData  = async (page: number)  => {

    const response = await api.get(`/products?page=${page}&limit=10`);

    setProducts(response.data.products);
  }

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <Styled.PaginationContainer>
      <Styled.PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        &laquo; Previous
      </Styled.PageButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <Styled.PageNumber
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </Styled.PageNumber>
      ))}
      <Styled.PageButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </Styled.PageButton>
    </Styled.PaginationContainer>
  )
}
