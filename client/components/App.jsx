import React from 'react';
import Container from './container.js';

export default class App extends React.Component{
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <h1> Hello World </h1>
        <Container />
      </div>
    )
  }
}
