import React, { Component } from 'react';

class Resizer extends Component {

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

  setStyles () {
    return `resizer-drag ${this.state.active ? 'resizer-ghost' : ''}`;
  }

  render () {
    return (
      <div className={this.setStyles()} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
        test
      </div>
    );
  }
};

export default Resizer;
