import React from 'react';
import List from './List/list.js';
import PopularList from './Popular/PopularList.js';
import axios from 'axios';


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      list: [],
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
    this.handleSubmit();
  }



  handlePopList(e){
    e.preventDefault();
    let list = this.state.popList;
    list.push(e);
    this.setState.popList = list;
    return list;
  }

  handleSubmit(e){
    // e.preventDefault();
    console.log("lol");
    axios.get('/yo')
      .then(function(response){
      console.log(response);
    })
      .catch(function(error){
        console.log(error);
      })

    this.setState({'input': ""});
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
