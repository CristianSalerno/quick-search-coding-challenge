import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { store } from '../app/store';
import { describe, expect, test, beforeEach } from 'vitest';

describe("Search bar tests", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
  
  test('SearchBar should render correctly', async () => {
    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
    expect(input).toBeInTheDocument();
  });

  test('SearchBar should not update store when onChange event trigger', async () => {
    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
  
    fireEvent.change(input, { target: { value: 'h' } });
    expect(store.getState().search.query).toBe('h');
  });
});

