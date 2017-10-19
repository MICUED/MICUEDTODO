import { combineReducers } from "redux"
import nav from "./nav.js"
import home from "./home.js"
import global from "./global.js"
const AppReducer = combineReducers({
    nav,
    home,
    global
})

export default AppReducer