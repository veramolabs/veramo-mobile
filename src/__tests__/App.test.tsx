import React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react-native'
import App from '../App'
import { agent } from '../veramo'

describe('App', () => {
  const ALIAS = 'Alice'

  const didManagerFind = jest.spyOn(agent, 'didManagerFind')
  didManagerFind.mockResolvedValue([])

  const didManagerCreate = jest.spyOn(agent, 'didManagerCreate')

  didManagerCreate.mockResolvedValue({
    alias: ALIAS,
    did: 'did:ethr:rinkeby:1234567890',
    provider: 'ethr-did',
    keys: [],
    services: [],
  })

  it('creates an identifier', async () => {
    const { getByText, queryByText, getByTestId } = render(<App />)

    act(() => {
      fireEvent.press(getByText('Load Identifiers'))
    })

    await waitFor(() => {
      expect(queryByText('Loading ...')).not.toBeTruthy()
    })

    act(() => {
      fireEvent.press(getByText('Create Identifier'))
    })

    expect(queryByText('Alice')).toBeTruthy()
  })
})
