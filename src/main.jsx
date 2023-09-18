import { FirstApp } from './FirstApp'
import './style.css'
import { CounterApp } from './CounterApp'
import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={1} />
    {/* <FirstApp title='hola como estas' subtitle={2} /> */}
  </React.StrictMode>
)
