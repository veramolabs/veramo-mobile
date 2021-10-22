import 'react-native'
import { render, fireEvent, act } from 'react-native-testing-library'
import App from '../App'

describe('App', () => {
  it('does not explode', async () => {
    const tree = render(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})