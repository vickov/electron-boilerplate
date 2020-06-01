import React from 'react'
import { useAsync } from 'react-async';
import CssBaseline from '@material-ui/core/CssBaseline'

import {loadUsers}  from './requests'
import Styles from './Styles'
import {Table, SliderColumnFilter} from './ReactTable'


function tablecolumnsUsers(){
    return [
      {
        id: 'selection',
        // Make this column a groupByBoundary. This ensures that groupBy columns
        // are placed after it
        groupByBoundary: true,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: 'Name222',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstname',
            // Use a two-stage aggregator here to first
            // count the total rows being aggregated,
            // then sum any of those counts if they are
            // aggregated further
            aggregate: ['sum', 'count'],
            Aggregated: ({ cell: { value } }) => `${value} Names`,
          },
          {
            Header: 'Last Name',
            accessor: 'lastname',
            // Use our custom `fuzzyText` filter on this column
            filter: 'fuzzyText',
            // Use another two-stage aggregator here to
            // first count the UNIQUE values from the rows
            // being aggregated, then sum those counts if
            // they are aggregated further
            aggregate: ['sum', 'uniqueCount'],
            Aggregated: ({ cell: { value } }) => `${value} Unique Names`,
          },
        ],
      },
      {
        Header: 'Info222',
        columns: [
          {
            Header: 'Age',
            accessor: 'email',
            Filter: SliderColumnFilter,
            filter: 'equals',
            // Aggregate the average age of visitors
            aggregate: 'average',
            Aggregated: ({ cell: { value } }) => `${value} (avg)`,
          }        
        ],
      },
    ]

  };


function TableUsers() {
  
  const columns = React.useMemo(() => tablecolumnsUsers(), [])
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })

  if (isLoading) return "Loading2222..."
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

export default TableUsers