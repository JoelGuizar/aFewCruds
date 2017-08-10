import React from 'react';

export default class Item extends React.Component{
  render(){
    return (
      <div className= "item">
        <h1> {this.props.data} </h1>
      </div>
    )
  }
}
