import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { store } from '../app/store';
import { expect, test } from 'vitest';
import { SearchResults } from '../components/SearchResults';


test('Renders search reults', async () => {
    render(
        <Provider store={store}>
            <SearchBar />
            <SearchResults />
        </Provider>
    );

    const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
    const bookItems = screen.queryAllByTestId(/^book-item-/);

    fireEvent.change(input, { target: { value: 'h' } });

    await waitFor(() => {
        const bookItems = screen.queryAllByTestId(/^book-item-/);
        expect(bookItems.length).toBe(0);
    });
        
    await waitFor(() => {
        const bookItems = screen.queryAllByTestId(/^book-item-/);
        fireEvent.change(input, { target: { value: 'harry' } });
        expect(screen.queryByText('Loading...')).toBeFalsy()
        expect(screen.queryByText('No results found.')).toBeFalsy();
        expect(screen.queryByText('Error loading results')).toBeFalsy();
        expect(bookItems.length).toBeGreaterThan(0)
    })
 
});