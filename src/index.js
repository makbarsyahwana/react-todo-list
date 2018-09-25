import React from "react"
import { render } from "react-dom"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import messageReducer from "./reducer"
import App from "./App"

import "./styles.css"

const store = createStore(messageReducer)

const rootElement = document.getElementById("root")
render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  rootElement
)
