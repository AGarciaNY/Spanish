import React, { Component } from 'react';
import styled from '@emotion/styled';

const Holder =styled.div`
  width:150px;
  height:120px;
  border:1px solid black;
  margin: 0 10px 20px;
`;
const Letter =styled.p`
  margin:0;
  font-size:50px;
  text-align:center;
  
`;
const Holdertwo= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:20px 0;
`;
const Button=styled.button`
  position:relative;
  left:40px;
  top:10px;
`;
export default class Abcs extends Component{
  
  render(){

  const read=(info)=>{
    let utterance = new SpeechSynthesisUtterance(info)
    utterance.lang = 'es-ES'
    speechSynthesis.speak(utterance)
  }









    var abcs=["a","b","c","ch","d","e","f","g","h","i","j","k","l","ll","m","n"," ñ","o","p","q","r","rr","s","t","u","v","w","x","y","z"];
    var boxes=abcs.map((info,index)=>{

      return(
      <Holder>  
        <Letter>{info.toUpperCase()} {info}</Letter>
        <Button onClick={()=>
            read(info)
        }>Sound</Button>
      </Holder>
      )
    })
    return(
      <Holdertwo>{boxes}</Holdertwo>
    )
  }

}
