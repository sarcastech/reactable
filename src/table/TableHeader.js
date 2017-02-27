import React, { Component } from 'react';
import TH from './TableHeaderCell';

class TableHeader extends Component {

  getCells = () => {
    return this.props.headerData.map(function (item, index) {
      return (<TH key={index} value={item} />)
    })
  }

  render () {
    return (
      <thead>
        <tr>
          {this.getCells()}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
