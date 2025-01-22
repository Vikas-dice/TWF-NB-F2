import React from 'react'
import CounterComponent from './components/CounterComponent'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Category from './components/Category'
import { useSelector } from 'react-redux'
import Login from './components/Login'
const App = () => {

  return (
    <Provider store={store}>
    <Login/>
    </Provider>
  )
}

export default App