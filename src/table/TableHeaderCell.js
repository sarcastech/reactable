import React, { Component } from 'react'
import Resize from './TableResize'

class TableHeaderCell extends Component {

  constructor (props) {
    super(props)

    this.state = {
      val: 0,
      elementWidth: 0,
      nextSiblingWidth: 0
    }
  }

  snapshotWidth = () => {
    let siblingWidth = this.refs.headerCell.nextElementSibling ?
      this.refs.headerCell.nextElementSibling.offsetWidth : -1
    this.setState({
      elementWidth: this.refs.headerCell.offsetWidth,
      nextSiblingWidth: siblingWidth
    })
  }

  getHeaderCellState = () => {
    return this.state;
  }

  render () {
    return (
      <th key={this.props.index} ref="headerCell" width={this.props.width}>
        {this.props.value}
        <Resize updateWidth={this.updateWidth} getHeaderCellState={this.getHeaderCellState} snapshotWidth={this.snapshotWidth} />
      </th>
    )
  }
}

export default TableHeaderCell
