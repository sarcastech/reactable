import React from 'react'
import ReactDOM from 'react-dom'
import Table from './table/Table'

let tableData = {
  headers: ['column 1', 'column 2', 'column 3', 'column 4'],
  content: [
    [1, 2, 3, 4],
    ['cat', 'dog', 'cow', 'fish'],
    [100, 200, 300, 400]
  ]
}

ReactDOM.render(
  <Table name='foo' data={tableData} />,
  document.getElementById('root')
)
