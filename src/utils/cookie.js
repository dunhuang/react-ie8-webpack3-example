const Cookie = typeof window === 'object' ? {
  /**
   * 获取Cookie内容
   */
  get: function (name) {
    let nameEQ = name + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length))
      }
    }
    return null
  },
  /**
   * 设置Cookie内容
   * @name Cookie.set
   * @function
   * @grammar cookie.set(name , value[ , days , path , domain , secure])
   * @param {String} name Cookie键名
   * @param {String} value Cookie键值
   * @param {Int} days Cookie有效期天数
   * @param {String} path Cookie有效路径
   * @param {String} domain Cookie有效域
   * @param {Boolean} secure 是否安全Cookie
   */
  set: function (name, value, days, path, domain, secure) {
    let expires
    if (typeof days === 'number') {
      let date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = date.toGMTString()
    } else if (typeof days === 'string') {
      expires = days
    } else {
      expires = false
    }
    document.cookie = name + '=' + encodeURIComponent(value) +
      (expires ? (';expires=' + expires) : '') +
      (path ? (';path=' + path) : '') +
      (domain ? (';domain=' + domain) : '') +
      (secure ? ';secure' : '')
  },
  /**
   * 删除Cookie内容
   */
  del: function (name, path, domain, secure) {
    this.set(name, '', -1, path, domain, secure)
  }
} : {get: ()=>{}, del: ()=>{}, set:()=>{}}

export default Cookie
