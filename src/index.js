import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
//import Resizer from './resizer';
import Table from './table/Table'


let tableHeaders = ['column 1', 'column 2', 'column 3', 'column 4'];
let contentData = [1, 2, 3, 4]

let tableData = {
  'headers': tableHeaders,
  'content': contentData
}

ReactDOM.render(
  <Table name='foo' data={tableData} />,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <Resizer />,
  document.getElementById('root')
);
*/