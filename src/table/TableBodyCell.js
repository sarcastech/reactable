import React, { Component } from 'react'

class TableBodyCell extends Component {

  render () {
    return (
      <td key={this.props.index}>{this.props.value}</td>
    )
  }
}

export default TableBodyCell
