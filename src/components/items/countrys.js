import React, { Component } from 'react';
import styled from '@emotion/styled';

import nonrspeaking from '../../image/countrys/nonespeaking.png';
import mexico from '../../image/countrys/mexico2.png';
import guatemala from '../../image/countrys/guatemala.png';
import salvador from '../../image/countrys/ElSalvador.png';
import honduras from '../../image/countrys/honduras.png';
import nicaragua from '../../image/countrys/nicaragua.png';
import costarica from '../../image/countrys/costarica.png';
import panama from '../../image/countrys/panama.png';
import colombia from '../../image/countrys/colombia.png';
import venezuela from '../../image/countrys/venezuela.png';
import ecuador from '../../image/countrys/ecuador.png';
import peru from '../../image/countrys/peru.png';
import bolivia from '../../image/countrys/bolivia.png';
import chile from '../../image/countrys/chile.png';
import paraguay from '../../image/countrys/paraguay.png';
import uruguay from '../../image/countrys/uruguay.png';
import argentina from '../../image/countrys/argentina.png';
import cuba from '../../image/countrys/cuba.png';
import rd from '../../image/countrys/rd.png';
import puertorico from '../../image/countrys/puertorico.png';
import espana from '../../image/countrys/espana.png';
import ge from '../../image/countrys/ge.png';

const Holder =styled.div`
  justify-content: center;
`;
const Map = styled.div`
  margin:0 auto;
  width:1020px;
  height:9px;
  position:relative;
`;
const Nonspeaking = styled.img`
  width:1020px;
`;

const Mexico = styled.img`
  width:151px;
  position: absolute;
  left:5px;
  top:10px;
  border-radius: 15px 300px 300px 300px;
`;
const Guatemala = styled.img`
  width:30px;
  position: absolute;
  left:118px;
  top:97px;
  border-radius: 30spx 15px 30px 15px;
`;
const Salvador = styled.img`
  height:20px;
  width: 20px;
  border-top-right-radius: 20px 8px;
  border-bottom-right-radius: 20px 8px;
  border-top-left-radius: 3px 6px;
  z-index:1;
  position: absolute;
  left: 134px;
  top: 120px;
  
`;
const Honduras =styled.img`
  width: 30px;
  position: absolute;
  left: 137px;
  top: 115px;
  z-index:2;
  border-top-left-radius: 3px 6px;
  border-top-right-radius: 15px 7px;
  border-bottom-left-radius: 25px 15px;
  border-bottom-right-radius: 20px 10px;
  

`;
const Nicaragua = styled.img`
  width: 30px;
  position: absolute;
  left: 143px;
  top: 120px;
  
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 0px 0px;
  border-bottom-left-radius: 0px 0px;
  border-bottom-right-radius: 0px 0px;
  `;
const Costarica = styled.img`
  width: 30px;
  position: absolute;
  left: 140px;
  top: 140px;
  
  border-top-left-radius: 0px 0px;
  border-top-right-radius: 30px 20px;
  border-bottom-left-radius: 20px 30px;
  border-bottom-right-radius: 0px 0px;
`;
const Panama = styled.img`
  width: 35px;
  position: absolute;
  left: 167px;
  top: 152px;
  border-top-left-radius: 5px 5px;
  border-top-right-radius: 8px 8px;
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px px;
`;
const Colombia = styled.img`
  width: 60px;
  position: absolute;
  left: 192px;
  top: 146px;
  
  border-top-left-radius: 30px 50px;
  border-top-right-radius: 0px 0px;
  border-bottom-left-radius: 0px 0px;
  border-bottom-right-radius: 0px 0px;
`;
const Venezuela = styled.img`
  width: 72px;
  position: absolute;
  left: 219px;
  top: 141px;
  
  border-top-left-radius: 0px 0px;
  border-top-right-radius: 0px 0px;
  border-bottom-left-radius: 65px 60px;
  border-bottom-right-radius: 0px 0px;
`;
const Ecuador = styled.img`
  width:37px;
  position: absolute;
  left: 171px;
  top: 191px;
  
  border-top-right-radius: 0px 0px;
  border-bottom-right-radius: 35px 30px;
`;
const Peru = styled.img`
  width:88px;
  position: absolute;
  left: 170px;
  top: 210px;
  border-top-right-radius: 60px 100px;
  border-bottom-left-radius: 0px 0px;
`;
const Bolivia = styled.img`
  width:72px;
  position: absolute;
  left: 244px;
  top: 271px;
  
`;
const Chile = styled.img`
  width:90px;
  position: absolute;
  left: 234px;
  top: 320px;
  
  border-top-right-radius: 90px 180px;
  border-bottom-left-radius: 90px 140px;
`;
const Paraguay = styled.img`
  width:59px;
  position: absolute;
  left: 282px;
  top: 328px;
  
  border-bottom-left-radius: 59px 59px;
`;
const Uruguay = styled.img`
  width:30px;
  position: absolute;
  left: 318px;
  top: 385px;
`;
const Argentina= styled.img`
  width:76px;
  position: absolute;
  left: 256px;
  top: 343px;
  
  border-top-left-radius: 20px 30px;
  border-bottom-left-radius: 50px 100px;
`;
const Cuba =styled.img`
  width:40px;
  position: absolute;
  left: 170px;
  top: 80px;
`;
const RD= styled.img`
  width:22px;
  position: absolute;
  left: 248px;
  top: 100px;
  border-top-left-radius: 0px 0px;
  border-top-right-radius: 0px 0px;
  border-bottom-left-radius: 0px 0px;
  border-bottom-right-radius: 0px 0px;
`;
const PuertoR =styled.img`
  width:14px;
  position: absolute;
  left: 280px;
  top: 110px;
  border-top-left-radius: 0px 0px;
  border-top-right-radius: 0px 0px;
  border-bottom-left-radius: 0px 0px;
  border-bottom-right-radius: 0px 0px;

`;
const Espana= styled.img`
  width:52px;
  position: absolute;
  left: 604px;
  top: 24px;
`;
const GE = styled.img`
  width:35px;
  position: absolute;
  left: 698px;
  top: 296px;
`;
const Info = styled.div`
  height:100px;
  width:350px;
  position: absolute;
  left:250px;
  top:1px;
  text-align:center;
`;
const CNAME = styled.p`
margin:10 auto;
height:20px;
font-size:20px;

`;
const CCname = styled.p`
height:20px;
margin:10 auto;
font-size:20px;
`;
export default class SSCountrys extends Component{
  constructor() {
    super();
    this.state = {
      name:null,
      cityname:null
    }
  }
  render(){
    const pickACountry=(CName,city)=>{
      if(CName ==="Peru"){
        let utterance = new SpeechSynthesisUtterance(`${CName}. ${city}`);
          utterance.lang = 'es-US';
          utterance.rate = .8

        speechSynthesis.speak(utterance);

        this.setState({
          name: CName,
          cityname:city
        });
      }else{
        let utterance = new SpeechSynthesisUtterance(`${CName} ---${city}`);
        utterance.lang = 'es-US';
        utterance.rate = 1

        speechSynthesis.speak(utterance);

        this.setState({
          name: CName,
          cityname:city
        });
      }
    }
    return(
      <Holder>
        <Map>
          <Nonspeaking src={nonrspeaking} alt={nonrspeaking}/>
          <Mexico src={mexico} alt={mexico} onClick={()=>pickACountry("México","la ciudad de  México")}/>
          <Guatemala src={guatemala} alt={guatemala} onClick={()=>pickACountry("Guatemala","la ciudad de  Guatemala")}/>
          <Honduras src={honduras} alt={honduras} onClick={()=>pickACountry("Honduras","Tegucigalpa")}/>
          <Salvador src={salvador} alt={salvador} onClick={()=>pickACountry("El Salvador","San Salvador")}/>
          
          <Nicaragua src={nicaragua} alt={nicaragua} onClick={()=>pickACountry("Nicaragua","Managua")}/>
          <Costarica src={costarica} alt={costarica} onClick={()=>pickACountry("Costa Rica","San José")}/>
          <Panama src={panama} alt={panama} onClick={()=>pickACountry("Panama","la ciudad de Panama")}/>
          <Colombia src={colombia} alt={colombia} onClick={()=>pickACountry("Colombia","bogota")}/>
          <Venezuela src={venezuela} alt={venezuela} onClick={()=>pickACountry("Venezuela","Caracas")}/>
          <Peru src={peru} alt={peru} onClick={()=>pickACountry("Peru","Lima")}/>
          <Ecuador src={ecuador} alt={ecuador} onClick={()=>pickACountry("Ecuador","Quito")}/>
          <Bolivia src={bolivia} alt={bolivia} onClick={()=>pickACountry("Bolivia","Sucre y La Paz")}/>
          <Chile src={chile} alt={chile} onClick={()=>pickACountry("Chile","Santiago")}/>
          <Argentina src={argentina} alt={argentina} onClick={()=>pickACountry("Argentina","Buenos Aires")}/>
          <Paraguay src={paraguay} alt={paraguay} onClick={()=>pickACountry("Paraguay","Asunción")}/>
          <Uruguay src={uruguay} alt={uruguay} onClick={()=>pickACountry("Uruguay","Montevideo")}/>
          
          <Cuba src={cuba} alt={cuba} onClick={()=>pickACountry("Cuba","Havana")}/>
          <RD src={rd} alt={rd} onClick={()=>pickACountry("República Dominicana","Santo Domingo")}/>
          <PuertoR src={puertorico} alt={puertorico} onClick={()=>pickACountry("Puerto Rico","San Juan")}/>
          <Espana src={espana} alt={espana} onClick={()=>pickACountry("España","Madrid")}/>
          <GE src={ge} alt={ge} onClick={()=>pickACountry("Guinea Ecuatorial","Malabo")}/>
          <Info>
            <CNAME>Country: {this.state.name}</CNAME>
            <CCname>Capitol: {this.state.cityname}</CCname>
          </Info>
        </Map>
        
      </Holder>
    )
  }

}