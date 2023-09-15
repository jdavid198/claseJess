import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp subtitle={2} /> */}
    <CounterApp value={1} />
  </React.StrictMode>,
)
