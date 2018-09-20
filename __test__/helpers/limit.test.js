import { toLimitText } from '../../src/helpers/limit'

describe('Limit Helper', () => {

  test('Should return string with max 30 character length ', () => {
    let text = 'Lorem Ipsum é simplesmente uma simulação.'
    expect(toLimitText(text)).toHaveLength(30)
  })

})
