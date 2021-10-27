// import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'

describe('App', () => {
  it('does not explode', async () => {
    const { toJSON } = render(<App />)

    expect(toJSON()).toMatchSnapshot()
  })
})
