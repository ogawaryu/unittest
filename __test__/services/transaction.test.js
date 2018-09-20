
import { getTransaction } from '../../src/services/transaction'
import axios from 'axios'
jest.mock('axios', () => ({ get: jest.fn() }))

describe('Transaction Service', () => {

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Should call axios get with parameter `v1/transaction`', () => {
    getTransaction()
    expect(axios.get).toHaveBeenCalledWith('/v1/transaction')
  })

  test('Should call axios get just one time', () => {
    getTransaction()
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  test('good response', () => {
    let expectValue = {data: {}, status: 200}
    axios.get.mockReturnValue(Promise.resolve(expectValue))

    let result = getTransaction()
    expect(result).resolves.toEqual(expectValue)
  })
  
  test('bad response', () => {
    let expectValue = {error: '', status: 404}
    axios.get.mockReturnValue(Promise.reject(expectValue))

    let result = getTransaction()
    expect(result).rejects.toEqual(expectValue)
  })

})
