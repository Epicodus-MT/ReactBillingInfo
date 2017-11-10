import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import form from "./formReducer"

export default combineReducers({
  tweets,
  user,
  form,
})