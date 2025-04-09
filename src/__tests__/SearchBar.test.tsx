import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { SearchBar } from '../components/SearchBar'
import { store } from '../app/store'


test('SearchBar updates value', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  )

  const input = screen.getByPlaceholderText(/keyword/i)
  fireEvent.change(input, { target: { value: 'harry' } })

  expect(input).toHaveValue('harry')
})
