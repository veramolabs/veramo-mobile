import detox, { device } from 'detox'

beforeAll(async () => {
  await detox.init()
  await device.launchApp()
})
