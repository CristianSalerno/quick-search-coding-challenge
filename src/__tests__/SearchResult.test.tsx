import { render, screen } from '@testing-library/react';
import { expect, test, describe, beforeEach, vi } from 'vitest';
import { SearchResults } from '../components/SearchResults';
import * as openLibraryApi from '../api/openLibraryApi'
import { useSelector } from 'react-redux';
import mockedData from './mockedBooks.json'

vi.mock('react-redux', () => ({
    ...vi.importActual('react-redux'),
    useSelector: vi.fn()
}));

describe('Search results Tests', () => {

    beforeEach(() => {
       vi.restoreAllMocks();
       vi.mocked(useSelector).mockImplementation(() => 'harry');
    });

    test('Should not render anything if the query is not triggered', () => {
        const spy = vi.spyOn(openLibraryApi, 'useSearchBooksQuery').mockImplementation(() => ({
            data: null,
            isFetching: false,
            error: null,
            refetch: vi.fn(),
        }));

        render(<SearchResults />);
        vi.mocked(useSelector).mockImplementation(() => '');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(screen.queryByTestId('dropdown')).not.toBeInTheDocument();
    });

     test('Should should loading state when is fetching', () => {
         vi.spyOn(openLibraryApi, 'useSearchBooksQuery').mockImplementation(() => ({
            data: null,
            isFetching: true,
            error: null,
            refetch: vi.fn(),
        }));

        render(<SearchResults />);
        expect(screen.queryByText('Loading...')).toBeInTheDocument();
    });

    test('should show a list of items if data is fetched', () => {
        vi.spyOn(openLibraryApi, 'useSearchBooksQuery').mockImplementation(() => ({
            data: {
                docs: mockedData
            },
            isFetching: false,
            error: null,
            refetch: vi.fn(),
        }));

        render(<SearchResults />);
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
        expect(screen.queryAllByTestId(/book-item/i)).toHaveLength(10);
    });
});