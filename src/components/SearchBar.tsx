import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setQuery } from '../features/search/searchSlice'
import { SearchResults } from './SearchResults'

const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const query = useSelector((state: RootState) => state.search.query)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value))
  }

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Type at least 2 characters"
        value={query}
        onChange={handleChange}
      />
      <SearchResults />
    </SearchWrapper>
  )
}
