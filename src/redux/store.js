import {createStore, combineReducers } from "redux";
import blogsReducer from "./reducers/blogsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import usersReducer from "./reducers/usersReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer=combineReducers({
    blogsState:blogsReducer,
    categoriesState: categoriesReducer,
    usersState:usersReducer,
    loginState:loginReducer
})

const store = createStore(rootReducer)

export default store