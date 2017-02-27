import React, { Component } from 'react';

class TableResize extends Component {

  constructor (props) {
    super(props)
    this.state = {
      active: false
    };
  }

  onMouseDown = (event) => {
    console.log('hello');
    this.setState({active: true});
  }

  onMouseUp = (event) => {
    console.log('goodbye');
    this.setState({active: false});
  }

  onMouseMove = (event) => {
    if (this.state.active) {
      console.log('pos = ', event.pageX);
    }
  }

  setStyles () {
    return `resizer-drag ${this.state.active ? 'resizer-ghost' : ''}`;
  }

  render () {
    return (
      <div className={this.setStyles()} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp} />
    );
  }
};

export default TableResize;
