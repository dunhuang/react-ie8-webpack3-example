import Cookie from "../utils/cookie"
export default {
  user: {
    username: Cookie.get("username"),    
    userid: Cookie.get("userid"),
    loginloading: false
  },
  product: {
    list: [],
    guestlist: [],
    listLoading: false,
    guestlistLoading: false
  }
}