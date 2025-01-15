import React from 'react'
import CounterComponent from './components/CounterComponent'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Category from './components/Category'
const App = () => {
  return (
    <Provider store={store}>
    <div>
      
      
      App


      <CounterComponent/>
      <Category/>
    </div>
    </Provider>
  )
}

export default App