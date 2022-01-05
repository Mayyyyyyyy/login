/* eslint-disable */
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "mobx-react"
import Login from './components/login'
import Home from './components/index'
import store from './store'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    )
  }
}

export default App;
