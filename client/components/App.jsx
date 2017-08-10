import React from 'react';
import Container from './container.js';

export default class App extends React.Component{
  constructor(){
    super();
  }
  
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <Container />
      </div>
    )
  }
}
