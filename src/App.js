//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//DONE: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//DONE: Integrate Navbar or Sidebar
//DONE: Create new Table component (Users) from the render part - Done?
//DONe: Interactive search integration - React table global filter
//Done: Update (not Delete)
//TODO: Insert
//TODO: Integrate fiscalization
//TODO: Integrate tabs
//TODO: Test react-big-scheduler (or simplier alternative with list)
//TODO: Separate app into folder and concerns


import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TableTest from './TableTest'
//import TableUsers from './TableUsers'
import Users from './TableUsers'
import Navbar from './Navbar'
import Form from './form'

function App() {
  return (
   <BrowserRouter>
    <Navbar>
    <Routes>
      <Route path="/" element={<TableTest />} />
      <Route path="/users/" element={<Users />} />
      <Route path="/form" element={<Form />} />
    </Routes>
    </Navbar>
  </BrowserRouter>
  )
}

export default App
