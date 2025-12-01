import axios from 'axios'
import { Config } from './config'

const axiosClient = axios.create({
  baseURL: Config.api,
})

export { axiosClient as api }
