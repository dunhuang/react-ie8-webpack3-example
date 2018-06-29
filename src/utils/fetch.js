import qs from 'qs'
import 'fetch-detector'
import 'fetch-ie8'

function BinaryFormatData ({inputFile, data}) { // 二进制走这个format函数
  const formData = new FormData()
  if (data && Object.keys(data).length) {
    for (let key in data) {
      formData.append(key, data[key])
    }
  }

  for (let i = 0; i < inputFile.files.length; i++) {
    formData.append(`files${i}`, inputFile.files[i])
  }
  // 如果需要上传文件
  // for (let i of inputFile.files) {
  //   formData.append(`files${i}`, inputFile.files[i])
  // }
  return formData
}

export default function myfetch ({ url, data, method = 'GET', headers = {}, dataType, inputFile }) {
  if (!url) {
    throw new Error('url is not defined!')
  }
  let fullUrl = url.indexOf('http') === 0
    ? url
    : url.indexOf('/') === 0 ? `${url}` : `/${url}`
  let options = {
    method: method.toUpperCase()
  }
  if (inputFile) {
    options = {
      ...options,
      method: 'POST',
      body: BinaryFormatData({data, inputFile}),
      headers: {
        ...options.headers
      }
    }
  } else if ((options.method === 'GET' || options.method === 'PUT') && dataType !== 'json') {
    data && (fullUrl += `?${qs.stringify(data)}`)
  } else {
    options = {
      ...options,
      body: qs.stringify(data),
      headers: {
        ...options.headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
  if (dataType === 'json') {
    options = {
      ...options,
      body: JSON.stringify(data),
      headers: {
        ...options.headers,
        'Content-Type': 'application/json'
      }
    }
  }
  const p = Promise.race([
    fetch(fullUrl, options),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('网络加载超时')), inputFile ? 100000 : 10000)
    })
  ])
  return p.then((response) => {
    if (response.status === 401 || response.status === 400) {
      throw new Error(response.status)
    } else if (
      (response.status > 299 || response.status < 200) &&
      response.status !== 304
    ) {
      throw new Error('服务繁忙，请稍后再试')
    }
    return response.json()
  })
  .then((json) => {
    return { ...json }
  })
  .catch((err) => {
    throw new Error(err.message)
  })
}