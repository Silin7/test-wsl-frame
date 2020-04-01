export default {
  // 控制组件大下
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
  formartDate2 (param, type) {
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
  }
}
