//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//TODO: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//TODO: Integrate Navbar or Sidebar
//TODO: Test react-big-scheduler
//TODO: Create new Table component from the render part

import React from 'react'
import { useAsync } from 'react-async';
import CssBaseline from '@material-ui/core/CssBaseline'

import loadUsers from './requests'
import Styles from './Styles'
import {Table, tablecolumns} from './ReactTable'


function App() {
  
  const columns = React.useMemo(() => tablecolumns(), [])
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })

  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)

  return (
    <Styles>
      <CssBaseline />
      <Table
        columns={columns}
        data={data}
      />
    </Styles>
  )
}

export default App
