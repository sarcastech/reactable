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

  updateWidth = (val) => {
    let element = this.refs.headerCell;
    let sibling = element.nextElementSibling;
    if (!sibling) return
    if (val > 0)  {
      if (this.state.nextSiblingWidth - val <= 75) return
      sibling.width = `${this.state.nextSiblingWidth - val}px`
    } else {
      if (this.state.elementWidth + val <= 75) return
      sibling.width = `${this.state.nextSiblingWidth + Math.abs(val)}px`
    }

    element.width = `${this.state.elementWidth + val}px`
  }

  render () {
    return (
      <th key={this.props.index} ref="headerCell" width={this.props.width}>
        {this.props.value}
        <Resize updateWidth={this.updateWidth} snapshotWidth={this.snapshotWidth} />
      </th>
    )
  }
}

export default TableHeaderCell
