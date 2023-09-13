import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import ListTodo from './Components/ListTodo'

function App() {
  

  return (
    <>
      <div>
        <AddTodo />
        <ListTodo />

      </div>
    </>
  )
}

export default App
