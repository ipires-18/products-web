'use client';
import React, { useState } from 'react';
import * as Styled from './styles';
import { DropdownProps, Option } from '@/types/components/dropdown';

export const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = "Select an option", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <Styled.DropdownContainer>
      <Styled.DropdownHeader onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder}
        <Styled.Arrow $isOpen={isOpen}>&#9662;</Styled.Arrow>
      </Styled.DropdownHeader>
      {isOpen && (
        <Styled.DropdownList>
          {options?.map((option) => (
            <Styled.DropdownItem disabled={option.disabled} key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </Styled.DropdownItem>
          ))}
        </Styled.DropdownList>
      )}
    </Styled.DropdownContainer>
  );
};
