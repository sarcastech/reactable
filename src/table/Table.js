import React, { Component } from 'react';
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {

  getCSSClass = () => {
    return `${this.props.name}-table`;
  }

  render () {
    return (
      <table className={this.getCSSClass()}>
        <TableHeader headerData={this.props.data.headers} />
        <TableBody bodyData={this.props.data.content} />
      </table>
    )
  }
}

export default Table;
