// ini buat combine semua reducer redux yang ada
import { combineReducers } from "redux";
import authReducers from "./authReducers";

export default combineReducers({
   auth: authReducers,
});