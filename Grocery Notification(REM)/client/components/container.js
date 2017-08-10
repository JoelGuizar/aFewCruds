import React from 'react';
import List from './List/list.js';
import PopularList from './Popular/PopularList.js';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      list: ["Apple", "Lol"],
      popList: [],
      value: ""
    }
    this.handleList = this.handleList.bind(this);
    this.handlePopList = this.handlePopList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleList(e){
    //e.preventDefault();

    let list = this.state.list;
    //list.push(e.target.value);
    list.push(e);
    this.setState.list = list;
    //console.log(e.target.value);
    return list;
  }

  handlePopList(e){
    e.preventDefault();
    let list = this.state.popList;
    list.push(e);
    this.setState.popList = list;
    return list;
  }

  handleSubmit(e){
    e.preventDefault();
    const self = this;
    this.setState(value: "");


    fetch('/users', {
      method: 'POST',
      data: this.state.value
    });

    this.setState(value: "");
  }

  handleChange(e){
    e.preventDefault(e);
    this.setState({value: e.target.value});
  }

  render(){
    return (
      <div className="container">
        <h1> Container Component </h1>
        <List list= {this.state.list} addToList= {this.handleList} handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
        <PopularList popList= {this.state.popList} addToPopList= {this.handlePopList}/>
      </div>
    )
  }
}
