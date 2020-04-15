//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//TODO: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//TODO: Integrate Navbar or Sidebar
//TODO: Test react-big-scheduler
//TODO: Create new Table component from the render part

import React from 'react'
import { useAsync } from 'react-async';
import CssBaseline from '@material-ui/core/CssBaseline'

//import makeData from './makeData'
import loadUsers from './requests'
import styled from 'styled-components'
import {Table, tablecolumns} from './ReactTable'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`


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
