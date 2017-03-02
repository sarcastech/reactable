import React, { Component } from 'react'
import TD from './TableBodyCell'

class TableBody extends Component {

  getCells = (data, idx) => {
    return data.map(function (item, index) {
      return (
        <TD key={`${idx}-${index}`} value={item} />
      )
    })
  }

  getRows = () => {
    let getCells = this.getCells
    return this.props.bodyData.map(function (row, index) {
      return (
        <tr key={index}>
          {getCells(row, index)}
        </tr>
      )
    })
  }

  render () {
    return (
      <tbody>
        {this.getRows()}
      </tbody>
    )
  }
}

export default TableBody
