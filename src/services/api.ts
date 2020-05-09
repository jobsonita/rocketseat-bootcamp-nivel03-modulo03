import axios, { AxiosError } from 'axios'

export type ApiError = AxiosError<{
  title: string
  message: string
}>

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api
