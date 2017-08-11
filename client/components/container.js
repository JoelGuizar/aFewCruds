import React from 'react';
import List from './List/list.js';
import PopularList from './Popular/PopularList.js';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      list: ["Apple", "Lol"],
      popList: [],
      input: ""
    }
    this.handleList = this.handleList.bind(this);
    this.handlePopList = this.handlePopList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleList(e){
    e.preventDefault();
    this.setState({'list': this.state.list.concat(this.state.input)});
    //console.log(e.target.value);
    console.log(this.state.input);
  }

  handleInput(item){
    this.setState({input:input})
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


  render(){
    return (
      <div className="container">
        <h1> Container Component </h1>
        <List list= {this.state.list} addToList= {this.handleList}/>
        <PopularList popList= {this.state.popList} addToPopList= {this.handlePopList}/>
      </div>
    )
  }
}
