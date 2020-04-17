
import React from 'react'
import { useAsync } from 'react-async';
import CssBaseline from '@material-ui/core/CssBaseline'

import loadUsers from './requests'
import Styles from './Styles'
import {Table, tablecolumns} from './ReactTable'

function TableTest() {
  
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

export default TableTest
