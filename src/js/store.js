import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { combineReducers } from "redux"

import billingForm from "./components/BillingForm/BillingFormReducer"

const reducer = combineReducers({
    billingForm,
})

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)