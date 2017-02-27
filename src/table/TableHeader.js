import React, { Component } from 'react';

class TableHeader extends Component {

  getCells = () => {
    return this.props.headerData.map(function (item, index) {
      return (<th key={index}>{item}</th>)
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

export default TableHeader
