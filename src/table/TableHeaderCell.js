import React, { Component } from 'react';
import Resize from './TableResize'

class TableHeaderCell extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: 'auto'
    }
  }

  updateWidth = (val) => {
    this.setState({width: val})
  }

  render () {
    return (
      <th key={this.props.index} width={this.state.width}>
        {this.props.value}
        <Resize />
      </th>
    )
  }
}

export default TableHeaderCell
