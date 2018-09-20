import { setHelloText } from '../../src/helpers/hello'

describe('Hello Helper', () => {

  test('Should return string `Hello world` passing parameter `World`', () => {
    expect(setHelloText('World')).toBe('Hello World')
  })

  test('Should return string `Hello` without parameter', () => {
    expect(setHelloText()).toBe('Hello ')
  })

})
