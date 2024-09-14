'use client'
import React from 'react'
import * as Styled from './styles'
import { PaginationProps } from '@/types/components/pagination'

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange(page)
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
