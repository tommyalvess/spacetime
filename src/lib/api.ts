import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nodedeployed-api.onrender.com',
})
