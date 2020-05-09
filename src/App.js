//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//DONE: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//DONE: Integrate Navbar or Sidebar
//DONE: Create new Table component (Users) from the render part - Done?
//TODO: Interactive search integration
//TODO: Integrate tabs
//TODO: Test react-big-scheduler
//TODO: Separarte app into folder and concerns
//TODO: Integrate fiscalization

import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TableTest from './TableTest'
//import TableUsers from './TableUsers'
import Users from './TableUsers'
import Navbar from './Navbar'

function App() {
  return (
   <BrowserRouter>
    <Navbar>
    <Routes>
      <Route path="/" element={<TableTest />} />
      <Route path="/users/" element={<Users />} />
    </Routes>
    </Navbar>
  </BrowserRouter>
  )
}

export default App
