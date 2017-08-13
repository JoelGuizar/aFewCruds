import React from 'react';
import Item from './Item.js';
import axios from 'axios';

export default class List extends React.Component{
  constructor(props){
    super(props);

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
            <input type= 'text' value={this.props.yo} onChange={this.props.handleChange} /> <br/>
          </label>
            <input type= "submit" value= "Add" />
        </form>

      </div>
    )
  }
}
