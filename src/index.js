/* globals localStorage */

import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { ApolloProvider, ApolloClient, createNetworkInterface } from "react-apollo"
import createLogger from "redux-logger"

import config from "../config.json"

import App from "./App"
import "./index.css"
import loginReducer from "./state/ducks/login/reducers"
import signupReducer from "./state/ducks/signup/reducers"
import userReducer from "./state/ducks/user/reducers"

const networkInterface = createNetworkInterface({
  uri: config.graphQLServiceUri,
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }

   // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token")
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`
    }
    next()
  },
}])

const client = new ApolloClient({ networkInterface })

const reducers = combineReducers({
  apollo: client.reducer(),
  login: loginReducer,
  signup: signupReducer,
  user: userReducer,
})

const store = createStore(reducers, {},
  compose(
    applyMiddleware(client.middleware(), createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
)
