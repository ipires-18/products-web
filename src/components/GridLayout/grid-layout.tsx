'use client'
import React, { PropsWithChildren } from 'react'
import * as Styled from './styles'

export const GridLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Styled.GridLayout>{children}</Styled.GridLayout>
}
