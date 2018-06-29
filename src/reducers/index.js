import { combineReducers } from "redux"
import user from "./userReducer"
import product from "./productReducer"

const reducer = combineReducers({
  user,
  product
})

export default reducer
