// creat by silin.wang 20.03.30
export default {
  // 控制组件 col 的大小
  getColSize (type, val) {
    if (val === '' || val === undefined || val === null) {
      val = 1 / 4
    }
    if (type === 'xs') {
      return Math.round(24 * 4 * val)
    }
    if (type === 'sm') {
      return Math.round(12 * 4 * val)
    }
    if (type === 'md') {
      return Math.round(8 * 4 * val)
    }
    if (type === 'lg') {
      return Math.round(6 * 4 * val)
    }
  },
  // 单个日期选择， 返回 Y-M-D-h-m-s 格式的字符串
  formartDate (param) {
    if (param !== undefined) {
      let date = param
      let Y = date.getFullYear() + '-'
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-'
      let D = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate() + ''
      let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
      let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':'
      let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D + h + m + s
    }
    return null
  },
  // 单个日期选择，根据 type 属性，返回相应格式的字符串
  formartDate2(param, type) {
    if (param !== undefined && param !== null && (typeof param === 'object')) {
      let date = param
      let Y = date.getFullYear() + '-'
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-'
      let D = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate() + ''
      let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
      let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':'
      let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      if (type === 'year') {
        return date.getFullYear() + ''
      }
      if (type === 'date') {
        return Y + M + D
      }
      return Y + M + D + h + m + s
    }
    return param
  },
  // 区间日期选择，返回 Y-M-D 格式的数组 
  formartDate3(param) {
    if (param !== undefined && param !== null && param !== []) {
      let date = param
      var dateArry = []
      date.forEach(item => {
        let Y = item.getFullYear() + '-'
        let M = item.getMonth() + 1 < 10 ? '0' + (item.getMonth() + 1) + '-' : item.getMonth() + 1 + '-'
        let D = item.getDate() < 10 ? '0' + item.getDate() + '' : item.getDate() + ''
        dateArry.push(Y + M + D)
      })
      return dateArry
    }
  }
}
