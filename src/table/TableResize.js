import React, { Component } from 'react'

class TableResize extends Component {

  constructor (props) {
    super(props)
    this.state = {
      active: false,
      startPosition: 0
    };
  }

  onMouseDown = (event) => {
    event.preventDefault()
    this.setState({startPosition: event.pageX})
    this.setState({active: true})

    this.props.snapshotWidth()

    document.onmousemove = this.onMouseMove
    document.onmouseup = this.onMouseUp
  }

  onMouseUp = (event) => {
    this.setState({active: false});
  }

  onMouseMove = (event) => {
    if (this.state.active) {
      this.props.updateWidth(event.pageX - this.state.startPosition);
    }
  }

  setStyles () {
    return `resizer-drag ${this.state.active ? 'resizer-ghost' : ''}`
  }

  render () {
    return (
      <div className={this.setStyles()} onMouseDown={this.onMouseDown} />
    );
  }
};

export default TableResize
