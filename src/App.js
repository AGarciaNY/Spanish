import React, { Component } from 'react';
import Nav from './components/nav';

import Items from './components/items/index';
import Abcs from './components/items/abcs';
import SSCountrys from './components/items/countrys';
import Numbers from './components/items/numbers';
import Time from './components/items/time';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pickapage: 'numbers',
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
    }else if(this.state.pickapage === 'abcs'){
      return (
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Abcs/>
        </div>
      );
    }else if(this.state.pickapage === "countrys"){
      return(
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <SSCountrys></SSCountrys>
        </div>
      )
    }else if(this.state.pickapage === "numbers"){
      return(
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Numbers></Numbers>
        </div>
      )
    }else if(this.state.pickapage === "time"){
      return(
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Time></Time>
        </div>
      )
    }




  }
}

