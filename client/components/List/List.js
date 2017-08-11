import React from 'react';
import Item from './Item.js';

export default class List extends React.Component{
  constructor(){
    super();
    this.state = {input: ""};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    //e.preventDefault();
    this.setState({input:e.target.value});
  }

  render(){
    return (
      <div className = "list">
      <h1> List Component </h1>
      <ul>
        {this.props.list.map(function(e,i){
            return <Item key={i} data={e} />
          })
        }
      </ul>

        <form onSubmit= {this.props.addToList} >
          <label>
            Name:
            <input type= 'text' value={this.state.input} onChange={this.handleChange} /> <br/>
          </label>
            <input type= "submit" value= "Add" />
        </form>

      </div>
    )
  }
}
