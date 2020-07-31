import axios from 'axios'
import baseConfig from './baseConfig'

axios.defaults.baseURL = baseConfig.baseURL;

let api = {
  apiLogin: function (params, cb) {
    axios.get('/login?name=' + params.name + '&password=' + params.password)
      .then((res) => {
        cb(res)
      }).catch((error) => {
        return Promise.reject(error)
      })
  }
}

export default api