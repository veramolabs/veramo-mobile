const ENV = process.env.NODE_ENV
const PLATFORM = ENV === 'TESTING' ? 'sqlite' : 'react-native'

export { PLATFORM }
