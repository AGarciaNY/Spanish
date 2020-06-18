import React,{Component} from 'react';
import styled from '@emotion/styled';

import abcs from '../../image/abcs.png';
import library from '../../image/library.png';
import spcountrys from '../../image/spcountrys.png';
import time from '../../image/time.png';
import numbers from '../../image/numbers.png';

const Main = styled.div`
position: relative;
`;
const Holder= styled.div`
`;

const Backgroundimage = styled.img`
  position:absolute;
  top:-20px;
  width:100%;
  opacity: 0.3;
`;

const ABCs = styled.div`
width:500px;
margin:20px auto;
position: relative;
padding:10px;
border:1px solid black;
border-radius:20px; 
`;
const Abcimage =styled.img`
  position: relative;
  left:200px;
`;
const ABCtext = styled.p`
  position:absolute;
  top:30px;
  font-weight: 900;
`;
const Button = styled.button`
  position:absolute;
  left:10px;
  top:100px;
`;
const HolderTwo = styled.div`
  background-color:red;
  width:90%;
  margin:0 auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  `;
const Text =styled.div`
  background-color:#a6a6a6;
  width:400px;
  height:225px;
  margin:0 20px 20px;
  position: relative;
  border:1px solid black;
  border-radius:30px;
`;
const Title=styled.p` 
  position: relative;
  top:30px;
  font-weight: 900;
  width:200px;
  left:10px;
`;
const Image=styled.img`
  background-color:yellow;
  width:200px;
  height:125px;
  position:absolute;
  top:40px;
  right:10px;
`;
const Buttontwo= styled.button`
  position:absolute;
  bottom:20px;
  left:30px;
`;
export default class Items extends Component{
  render(){
    return(
      <Main>
        <Holder>
          <Backgroundimage url={library} src={library}/>
          <ABCs>
            <ABCtext>Learn the ABCs first</ABCtext>
            <Abcimage url={abcs} src={abcs}/>
            <Button onClick={( ) => this.props.changepage("abcs")}>Lets learn the ABCs</Button>
          </ABCs>

        </Holder>
        <HolderTwo>
          <Text>
            <Title>Learn the the Spansih speaking countrys</Title>
            <Image url={spcountrys} src={spcountrys}/>
            <Buttontwo onClick={( ) => this.props.changepage("countrys")}>Learn the 22 Spanish speaking countrys</Buttontwo>
          </Text>
          <Text>
            <Title>Learn the the numbers</Title>
            <Image url={numbers} src={numbers}/>
            <Buttontwo onClick={( ) => this.props.changepage("countrys")}>Learn the 22 Spanish speaking countrys</Buttontwo>
          </Text>
          <Text>
            <Title>Learn to tell numbers</Title>
            <Image url={time} src={time}/>
            <Buttontwo onClick={( ) => this.props.changepage("countrys")}>Learn the 22 Spanish speaking countrys</Buttontwo>
          </Text>
          
        </HolderTwo>

      </Main>
    );
  }

    
}