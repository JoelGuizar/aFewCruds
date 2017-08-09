import React from 'react';
import List from './List/list.js';
import PopularList from './Popular/PopularList.js';


const addToList = () => {

}

const addToPopList = () => {

}

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      list: ["Apple", "Lol"],
      popList: []
    }
  }

  render(){
    return (
      <div className="container">
        <h1> Container Component </h1>
        <List list= {this.state.list} />
        <PopularList popList= {this.state.popList}/>
      </div>
    )
  }
}
