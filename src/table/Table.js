import React, { Component } from 'react';
import TableRow from './TableRow'
import TableHeader from './TableHeader'

class Table extends Component {

  getCSSClass = () => {
    return `${this.props.name}-table`;
  }

  render () {
    return (
      <table className={this.getCSSClass()}>
        <thead>
          <TableHeader headerData={this.props.data.headers} />
        </thead>
        <tbody>
          <TableRow rowData={this.props.data.content} />
        </tbody>
      </table>
    )
  }
}

export default Table;
