import React, { Component } from 'react';
import styled from'@emotion/styled';


var numbers=new Array(100).fill("number");
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
const Button=styled.button`
  position:relative;
  left:40px;
  top:10px;
`;
const Holdertwo= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:20px 0;
`;
export default class Numbers extends Component{
  render(){
    const read=(info)=>{
      let utterance = new SpeechSynthesisUtterance(info)
    if(info === "y" ){
      utterance.lang = 'es-ES';
      speechSynthesis.speak(utterance);
      }else{
        utterance.lang = 'es-US';
        speechSynthesis.speak(utterance);
      };
    }
    var boxes=numbers.map((info,index)=>{

      return(
        <Holder key={index+"letter"}>
          <Letter>{index+1}</Letter>
          <Button onClick={()=>{
              read(index+1)
          }}>Sound</Button>
        </Holder>
        )
      })

    return(
      <Holdertwo>
        {boxes}
      </Holdertwo>
    )
  }
}