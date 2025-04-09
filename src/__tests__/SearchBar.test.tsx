import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { store } from '../app/store';
import { expect, test } from 'vitest';

test('SearchBar updates value and triggers search when input has 2 or more characters', async () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/Type at least 2 characters/i);


  fireEvent.change(input, { target: { value: 'h' } });
  expect(store.getState().search.query).toBe('h');

  
  fireEvent.change(input, { target: { value: 'ha' } });
  await waitFor(() => {
    expect(store.getState().search.query).toBe('ha');
  });

  
  fireEvent.change(input, { target: { value: 'harry' } });
  await waitFor(() => {
    expect(store.getState().search.query).toBe('harry');
    expect(screen.getByText('Loading...')).toBeTruthy(); 

  })
 
  await waitFor(() => {
    const bookItems = screen.queryAllByTestId(/^book-item-/);
    expect(bookItems.length).toBeGreaterThan(0); 
  });
});
