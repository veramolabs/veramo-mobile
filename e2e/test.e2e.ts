import { expect } from 'detox'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id('scroll'))).toBeVisible()
  })
})
