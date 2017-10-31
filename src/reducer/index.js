import { combineReducers } from "redux"
import nav from "./nav.js"
import home from "./home.js"
import api from "./api.js"
const AppReducer = combineReducers({
    nav,
    home,
    api
})

export default AppReducer