import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { useSearchBooksQuery } from '../api/openLibraryApi'
import { Book } from '../types/book'

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: white;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
`

const Item = styled.li`
  display: flex;
  padding: 0.75rem;
  gap: 0.75rem;
  border-bottom: 1px solid #f0f0f0;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`

const Thumbnail = styled.div`
  width: 40px;
  height: 60px;
  background-color: #ddd;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 0.8rem;
    color: #555;
  }
`

export const SearchResults: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query)
  const { data, isFetching, isError } = useSearchBooksQuery(query, {
    skip: query.trim().length < 2,

  })

  // the api returns an error message if the query search string is too short
  if (query.trim().length < 2) return null
  if (isFetching) return <Dropdown><Item>Loading...</Item></Dropdown>
  if (isError) return <Dropdown><Item>Error loading results</Item></Dropdown>
  if (!data?.docs.length) return <Dropdown><Item>No results found.</Item></Dropdown>

  return (
    <Dropdown>
      {data.docs.map((book: Book) => (
        <Item key={book.key}>
          <a
            href={`${import.meta.env.VITE_AMAZON_URL}${encodeURIComponent(book.title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thumbnail />
          </a>
            <Info>
            <strong>{book.title}</strong>
            {book.author_name && <span>{book.author_name.join(', ')}</span>}
          </Info>
        
          
        </Item>
      ))}
    </Dropdown>
  )
}