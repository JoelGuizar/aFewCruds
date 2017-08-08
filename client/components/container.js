import React from 'react';
import List from './List/list.js';
import PopularList from './Popular/PopularList.js';

export default class App extends React.Component{
  render(){
    return (
      <div className="container">
        <h1> Container Component </h1>
        <List />
        <PopularList />
      </div>
    )
  }
}
