import React, { Component } from 'react';

class TableRow extends Component {

  getCells = () => {
    return this.props.rowData.map(function (item, index) {
      return (<td key={index}>{item}</td>)
    })
  }

  render () {
    return (
      <tr>
        {this.getCells()}
      </tr>
    )
  }
}

export default TableRow
