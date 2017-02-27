import React, { Component } from 'react';
import TD from './TableBodyCell';

class TableBody extends Component {

  getCells = () => {
    return this.props.bodyData.map(function (item, index) {
      return (<TD key={index} value={item} />)
    })
  }

  render () {
    return (
      <tbody>
        <tr>
          {this.getCells()}
        </tr>
      </tbody>
    )
  }
}

export default TableBody
