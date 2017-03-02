import React, { Component } from 'react'

class TableBodyCell extends Component {

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
      <td key={this.props.index} width={this.state.width}>{this.props.value}</td>
    )
  }
}

export default TableBodyCell
