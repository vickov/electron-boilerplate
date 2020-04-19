//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//TODO: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//TODO: Integrate Navbar or Sidebar
//TODO: Test react-big-scheduler
//TODO: Create new Table component from the render part

import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TableTest from './TableTest'
import TableUsers from './TableUsers'
import Users from './Users'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<TableTest />} />
      <Route path="/users/" element={<TableUsers />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
