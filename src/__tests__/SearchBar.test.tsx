import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { store } from '../app/store';
import { describe, expect, test, beforeEach } from 'vitest';
import { SearchResults } from '../components/SearchResults';


describe("Search bar tests", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });

  test('SearchBar should not update if user types 1 character', async () => {
    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
  
    fireEvent.change(input, { target: { value: 'h' } });
    expect(store.getState().search.query).toBe('h');
    expect(screen.queryByText('Loading...')).toBeFalsy(); 
  });

  test('SearchBar should call backend if user types 2 or more characters and show a loading state', async () => {
    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
    fireEvent.change(input, { target: { value: 'ha' } });
    await waitFor(() => {
      expect(store.getState().search.query).toBe('ha');
      expect(screen.queryByText('Loading...')).toBeTruthy(); 
    });
  })

  test("SearchBar should call backend and display results when user types 2 or more characters", async () => {
    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
    fireEvent.change(input, { target: { value: 'harry' } });
   
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    });

    const bookItems = screen.queryAllByTestId(/^book-item-/);
    expect(bookItems.length).toBeGreaterThan(0); 
  });
  
})

