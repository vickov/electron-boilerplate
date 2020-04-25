//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//TODO: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//TODO: Integrate Navbar or Sidebar
//TODO: Test react-big-scheduler
//TODO: Create new Table component from the render part - Done?

import React from 'react'
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import TableTest from './TableTest'
//import TableUsers from './TableUsers'
import Users from './TableUsers'
import PermanentDrawerLeft from './Navbar'

function App() {
  return (
   <BrowserRouter>
    <PermanentDrawerLeft>
    <Routes>
      <Route path="/" element={<TableTest />} />
      <Route path="/users/" element={<Users />} />
    </Routes>
    </PermanentDrawerLeft>
  </BrowserRouter>
  )
}

export default App
