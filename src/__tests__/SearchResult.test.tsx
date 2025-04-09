import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { store } from '../app/store';
import { expect, test, describe, beforeEach } from 'vitest';
import { SearchResults } from '../components/SearchResults';


describe('Search results Tests', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchBar />
                <SearchResults />
            </Provider>
        );
    });

    test('Should not render results when user types 1 character', async () => {
        const input = screen.getByPlaceholderText(/Type at least 2 characters/i);
        fireEvent.change(input, { target: { value: 'h' } });

        await waitFor(() => {
            const bookItems = screen.queryAllByTestId(/^book-item-/);
            expect(bookItems.length).toBe(0);
        });
    });

    test('Should render results when user types 2 or more characters', async () => {
        const input = screen.getByPlaceholderText(/Type at least 2 characters/i);

        await waitFor(() => {
            const bookItems = screen.queryAllByTestId(/^book-item-/);
            fireEvent.change(input, { target: { value: 'harry' } });
            expect(screen.queryByText('Loading...')).toBeFalsy()
            expect(screen.queryByText('No results found.')).toBeFalsy();
            expect(screen.queryByText('Error loading results')).toBeFalsy();
            expect(bookItems.length).toBeGreaterThan(0)
        })
    });
});