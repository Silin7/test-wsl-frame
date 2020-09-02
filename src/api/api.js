import axios from 'axios'
import baseConfig from './baseConfig'
axios.defaults.baseURL = baseConfig.baseURL;

import api_login from './apicomponents/login'

let api = Object.assign({}, api_login)

export default api