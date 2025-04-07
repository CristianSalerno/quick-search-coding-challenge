import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'

const HeaderContainer = styled.header`
  background-color: #e0e0e0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchBar />
    </HeaderContainer>
  )
}
