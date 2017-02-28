import React, { Component } from 'react';
import TH from './TableHeaderCell';

class TableHeader extends Component {

  getCells = () => {
    let dataLength = this.props.headerData.length;
    let startWidth = `${(1 / dataLength) * 100}%`;
    return this.props.headerData.map(function (item, index) {
      return (<TH key={index} value={item} width={startWidth} />)
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
