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
    this.handleChange = this.handleChange.bind(this);
  }

  handleList(e){
    e.preventDefault();
    this.setState({'list': this.state.list.concat(this.state.input)});
    //console.log(e.target.value);
    this.setState({'input': ""});
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
    this.setState(input: "");


    fetch('/post', {
      method: 'POST',
      data: this.state.input
    });

    this.setState(input: "");
  }

  handleChange(e){
    //e.preventDefault();
    this.setState({input:e.target.value});
  }

  render(){
    return (
      <div className="container">
        <h1> Container Component </h1>
        <List list= {this.state.list} addToList= {this.handleList} handleChange= {this.handleChange} yo={this.state.input}/>
        <PopularList popList= {this.state.popList} addToPopList= {this.handlePopList}/>
      </div>
    )
  }
}
