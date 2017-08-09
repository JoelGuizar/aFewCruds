import React from 'react';
import Item from './Item.js';

export default class List extends React.Component{
  constructor(){
    super();
    this.state = {list: []};
    this.currentObject ={};
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const self = this;

    fetch('/users', {
      method: 'POST',
      data: {

      }
    });
  }

  render(){
    return (
      <div className = "list">
      <h1> List Component </h1>
      <ul>
        {
          this.props.list.map(function(e,i){
            return <Item key={i} data={e} />
          })
        }
      </ul>

        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input type = 'text'/> <br/>
          </label>

            Hi:
            <input type = 'Lol'/>
        </form>

      </div>
    )
  }
}
