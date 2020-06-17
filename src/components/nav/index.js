import React, {Component} from 'react';
import styled from '@emotion/styled';
import logo from '../../image/logo.png';

const Navcontainer = styled.div`
  position: relative;
  top: 0;
  z-index: 6;
  height: 125px;
  display: flex;

  background-color:black;
  color: white;
  @media only screen and (max-width: 750px) {
    position:static;
    height:150px;
  }
`;

const Image = styled.img`
  position: relative;
  top: 10px;
  left: 30px;
  margin:0;
  height:105px;
  width:150px;
  @media only screen and (max-width: 750px) {
    width: 100%;
    position: static;
    padding:20px 0 0 0;
    text-align: center;
  }
`;

const Title = styled.p`
  position: relative;
  height:10px;
  margin:0;
  left:70px;
  top:40px;
  font-size:30px;
  color:white;
`;
const LinkHolder = styled.div`
  position: absolute;
  right: 150px;
  top: 40px;
  @media only screen and (max-width: 750px) {
    top: 80px;
    right: 110px;
  }
`;

const Links = styled.button`
  border: 0;
  width: 100px;

  background: transparent;
  text-decoration: none;
  color: white;
  font-size: 16px;
  text-align: center;

  &:hover{
    font-size: 18px;
  }

  @media only screen and (max-width: 750px) {
    width:80px;
    font-size: 14px;
    &:hover{
      font-size: 15px;
    }
  }
`;

export default class Nav extends Component{

  render(){

    return(
    <Navcontainer>
      <Image url={logo} src={logo}/>
      <Title>Learn spanish in City Poly</Title>
      <LinkHolder>
          <Links onClick={() => this.props.changepage('home')}>Home</Links>
          <Links onClick={() => this.props.changepage('artwork')}>Art Work</Links>
          <Links onClick={() => this.props.changepage('projects')}>Projects</Links>
      </LinkHolder>
    </Navcontainer>
    );
  }

}