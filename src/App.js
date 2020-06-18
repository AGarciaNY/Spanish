import React, { Component } from 'react';
import Nav from './components/nav';
import Items from './components/items/index'
import Abcs from './components/items/abcs'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pickapage: 'home',
    }
  }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
  }  

  render(){
    if(this.state.pickapage === 'home'){
      return (
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Items changepage={(page)=> this.pickAPage(page)}/>
        </div>
      );
    }
    if(this.state.pickapage === 'abcs'){
      return (
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Abcs changepage={(page)=> this.pickAPage(page)}/>
        </div>
      );
    }




  }
}

