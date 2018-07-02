import * as ActionTypes from '../constants/actionTypes'
import Cookie from '../utils/cookie'
import browserHistory from '../history'
import myfetch from '../utils/fetch'

export function login (username, password, nextPathname = '/') {
  return  async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.LOGIN_PENDING
      })

      const {flag, data, msg} = await myfetch({url: '/json/login.json'})
      if (flag) {
        const {username, userid} = data
        dispatch({
          type: ActionTypes.LOGIN_SUCC,
          username,
          userid
        })
        Cookie.set('username', username, 1, '/')
        Cookie.set('userid', userid, 1, '/')
        browserHistory.push(nextPathname)
        setTimeout(()=>alert(`欢迎，${username}！`), 100)
      } else {
        alert(msg)
        dispatch({
          type: ActionTypes.LOGIN_FAIL
        })
      }
    } catch (e) {
      alert(e.message)
    }
  }
}

export function logout (router) {
  return (dispatch, getState) => {
    Cookie.del('username')
    Cookie.del('userid')
    dispatch({
      type: ActionTypes.LOGOUT,
      payload: {}
    })
    browserHistory.push('/')
    setTimeout(()=>alert('成功登出！'), 100)
  }
}
