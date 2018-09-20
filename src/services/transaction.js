import axios from 'axios'

export function getTransaction () {
  return axios.get('/v1/transaction')
}