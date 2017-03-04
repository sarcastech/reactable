import React, { Component } from 'react'

class TableResize extends Component {

  constructor (props) {
    super(props)
    this.state = {
      active: false,
      startPosition: 0
    };
  }

  findParentByTag = (tag, el) => {
    if (el.tagName.toLowerCase() === tag) {
      return el
    } else if (el.parentElement) {
      return this.findParentByTag(tag, el.parentElement)
    } else {
      return false
    }
  }

  updateWidths = (val) => {
    let element = this.refs.resizer.parentElement;
    let sibling = element.nextElementSibling;
    console.log('els ', element, sibling)
    let parentState = this.props.getHeaderCellState()
    if (!sibling) return
    if (val > 0)  {
      if (parentState.nextSiblingWidth - val <= 75) return
      sibling.width = `${parentState.nextSiblingWidth - val}px`
    } else {
      if (parentState.elementWidth + val <= 75) return
      sibling.width = `${parentState.nextSiblingWidth + Math.abs(val)}px`
    }

    element.width = `${parentState.elementWidth + val}px`
  }

  componentDidMount = () => {
    let resizer = this.refs.resizer
    let table = this.findParentByTag('table', resizer)
    resizer.style.height = `${table.offsetHeight}px`
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
      this.updateWidths(event.pageX - this.state.startPosition);
    }
  }

  setStyles () {
    return `resizer-drag ${this.state.active ? 'resizer-ghost' : ''}`
  }

  render () {
    return (
      <div className={this.setStyles()} ref="resizer" onMouseDown={this.onMouseDown} />
    );
  }
};

export default TableResize
