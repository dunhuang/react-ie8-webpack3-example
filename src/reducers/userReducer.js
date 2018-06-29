import * as ActionTypes from "../constants/actionTypes"
import initialState from "./initialState"


export default function userReducer (state = initialState.user, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_PENDING: {
      return {...state, loginloading: true}
    }
    case ActionTypes.LOGIN_SUCC: {
      return {...state, ...{username: action.username, userid: action.userid, loginloading: false}}
    }
    case ActionTypes.LOGIN_FAIL: {
      return {...state, ...{username: '', userid: '', loginloading: false}}
    }
    case ActionTypes.LOGOUT: {
      return {...state, ...{username: '', userid: ''}}
    }
    default:
      return state
  }
}
