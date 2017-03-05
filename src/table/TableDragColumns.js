import React, { Component } from 'react';

class TableDragColumn extends Component {

  constructor (props) {
    super(props)

    this.state = {}
  }

  onDragStart = (event) => {
    event.dataTransfer.setData('text', event.target.parentElement.cellIndex + '')
    event.dataTransfer.dropEffect = 'copy';
  }

  onDragEnter = (event) => {
    event.target.classList.add('drag-enter');
  }

  onDragLeave = (event) => {
    event.target.classList.remove('drag-enter');
  }

  onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move"
  }

  onDrop = (event) => {
    event.preventDefault();
    event.target.classList.remove('drag-enter');
    var newIndex = event.target.parentElement.cellIndex;
    var currentIndex = parseInt(event.dataTransfer.getData('text'), 10);
    this.replaceColumns(this.getColumnByIndex(currentIndex), newIndex);
  }

  getColumnByIndex = (index) => {
    var column = Array.prototype.slice.call(document.querySelectorAll('th, td'));
    var cells = column.filter(function (item) {
      return item.cellIndex === index;
    });
    return cells
  };

  replaceColumns = (currentColumn, newIndex) => {
    var replacedColumn = this.getColumnByIndex(newIndex);
    var isNewIndexHigher = currentColumn[0].cellIndex < newIndex
    currentColumn.forEach(function (cell, i) {
      var parent = cell.parentElement;
      if (isNewIndexHigher) {
        parent.replaceChild(currentColumn[i], replacedColumn[i]);
        parent.insertBefore(replacedColumn[i], parent.children[newIndex - 1]);
      } else {
        parent.replaceChild(currentColumn[i], replacedColumn[i]);
        parent.insertBefore(replacedColumn[i], parent.children[newIndex + 1]);
      }
    });
  }

  render () {
    return (
      <div draggable="true" onDragStart={this.onDragStart} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave} onDragOver={this.onDragOver} onDrop={this.onDrop}>{this.props.text}</div>
    )
  }
}

export default TableDragColumn
