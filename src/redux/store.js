import { createStore, combineReducers }  from "redux"
import todoReducer from "./reducer/todoReducer"
import userReducer from "./reducer/userReducer"

const rootReducer =combineReducers({
    userReducer,todoReducer

})

const store =createStore(rootReducer)
export  default store