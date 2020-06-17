import React,{Component} from 'react';
import styled from '@emotion/styled';

import abcs from '../../image/abcs.png';
import library from '../../image/library.png';

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
export default class Items extends Component{
  render(){
    return(
      <Holder>
        <Backgroundimage url={library} src={library}/>
        <ABCs>
          <ABCtext>Learn the ABCs first</ABCtext>
          <Abcimage url={abcs} src={abcs}/>
          <Button onClick={( ) => this.props.changepage("abcs")}>Lets lern the ABCs</Button>
        </ABCs>

      </Holder>
    );
  }

    
}