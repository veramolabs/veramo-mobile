import React from 'react'
import { render, act } from '@testing-library/react-native'
import App from '../App'

describe('App', () => {
  it('creates an identifier', async () => {
    const ALIAS = 'Alice'

    // const root = await render(<App />)
    // const root = await waitFor(() => render(<App />))
    // const div = await waitFor(() => getByText('Create Identifier'))

    // await act(async () => {

    // })

    // await waitFor(() => {
    //   expect(getByTestId('scrollView')).toBeDefined()
    // })

    // await act(async () => render(<App />))

    // const input = getByTestId('input')
    // const button = getByText('Create Identifier')

    // act(() => {
    //   fireEvent.changeText(input, ALIAS)
    // })

    // await waitFor(() => expect(getByText(ALIAS)).toBeTruthy())

    // act(() => {
    //   fireEvent.press(button)
    // })

    // await waitFor(() => {
    //   const identifier = queryByTestId('item-identifier')
    //   console.log('ID', identifier)
    // })

    // await waitFor(() => expect(queryByTestId('item-identifier')).toBeTruthy())

    // expect(getByTestId('item-identifier').props.children).toBe(ALIAS)
    // await waitFor(() => expect(toJSON()).toMatchSnapshot())
  })
})
