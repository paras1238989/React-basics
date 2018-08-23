import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

function Header(){
  return <div><h1>Header Component</h1></div>
}
function Footer(){
  return <div><h1>Footer Component</h1></div>
}

class App extends Component {
render() {
    var greet = (username) => 'Hello!!!'+username;
    var name='Paras'
    var myStyle={
      color:'green'

    }
    return (
      <div>
        <Header/>
        <h1 style={myStyle}>Hello World</h1>
        <br/>
        <p>4+5 = {4+5}</p>
        <p>My name is {name}</p>
        <p>Function: {greet('Paras')}</p>
        <Clock />
        <Footer/>
      </div>
    );
  }
}

export default App;
