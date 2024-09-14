'use client'
import React, { useState } from 'react'
import { Container, Input } from './styles'
import { Button } from '../Button/button'
import { SearchInputProps } from '@/types/components/search-input'

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <Container>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar produtos..."
        aria-label="Buscar produtos"
      />
      <Button title="Buscar" onClick={handleSearch} />
    </Container>
  )
}
