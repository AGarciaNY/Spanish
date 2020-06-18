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
  position:relative;
`;
const Map = styled.div`
  margin:0 auto;
  width:1100px;
`;
const Nonspeaking = styled.img`
  width:1100px;
  
`;

const Mexico = styled.img`
  width:150px;
  position: absolute;
  left:306px;
  top:12px;
`;
const Guatemala = styled.img`
  width:30px;
  position: absolute;
  left:418px;
  top:97px;
`;
const Salvador = styled.img`
  width: 20px;
  position: absolute;
  left: 434px;
  top: 120px;
`;
const Honduras =styled.img`
  width: 30px;
  position: absolute;
  left: 437px;
  top: 115px;
`;
const Nicaragua = styled.img`
  width: 30px;
  position: absolute;
  left: 443px;
  top: 120px;
  `;
const Costarica = styled.img`
  width: 30px;
  position: absolute;
  left: 440px;
  top: 140px;
`;
const Panama = styled.img`
  width: 35px;
  position: absolute;
  left: 467px;
  top: 152px;
`;
const Colombia = styled.img`
  width: 60px;
  position: absolute;
  left: 492px;
  top: 146px;
`;
const Venezuela = styled.img`
  width: 72px;
  position: absolute;
  left: 518px;
  top: 142px;
`;
const Ecuador = styled.img`
  width:37px;
  position: absolute;
  left: 471px;
  top: 191px;
`;
const Peru = styled.img`
  width:88px;
  position: absolute;
  left: 470px;
  top: 210px;
`;
const Bolivia = styled.img`
  width:72px;
  position: absolute;
  left: 545px;
  top: 272px;
`;
const Chile = styled.img`
  width:90px;
  position: absolute;
  left: 534px;
  top: 320px;
`;
const Paraguay = styled.img`
  width:59px;
  position: absolute;
  left: 582px;
  top: 329px;
`;
const Uruguay = styled.img`
  width:35px;
  position: absolute;
  left: 615px;
  top: 383px;
`;
const Argentina= styled.img`
  width:76px;
  position: absolute;
  left: 556px;
  top: 343px;
`;
const Cuba =styled.img`
  width:40px;
  position: absolute;
  left: 470px;
  top: 80px;
`;
const RD= styled.img`
  width:22px;
  position: absolute;
  left: 548px;
  top: 100px;
`;
const PuertoR =styled.img`
  width:14px;
  position: absolute;
  left: 580px;
  top: 110px;

`;
const Espana= styled.img`
  width:53px;
  position: absolute;
  left: 902px;
  top: 24px;
`;
const GE = styled.img`
  width:35px;
  position: absolute;
  left: 1002px;
  top: 300px;
`;
export default class SSCountrys extends Component{
  render(){
    return(
      <Holder>
        <Map>
          <Nonspeaking src={nonrspeaking} alt={nonrspeaking}/>
          <Mexico src={mexico} alt={mexico}/>
          <Guatemala src={guatemala} alt={guatemala}/>
          <Salvador src={salvador} alt={salvador}/>
          <Honduras src={honduras} alt={honduras}/>
          <Nicaragua src={nicaragua} alt={nicaragua}/>
          <Costarica src={costarica} alt={costarica}/>
          <Panama src={panama} alt={panama}/>
          <Colombia src={colombia} alt={colombia}/>
          <Venezuela src={venezuela} alt={venezuela}/>
          <GE src={ge} alt={ge}/>
          <Peru src={peru} alt={peru}/>
          <Ecuador src={ecuador} alt={ecuador}/>
          <Bolivia src={bolivia} alt={bolivia}/>
          <Chile src={chile} alt={chile}/>
          <Paraguay src={paraguay} alt={paraguay}/>
          <Uruguay src={uruguay} alt={uruguay}/>
          <Argentina src={argentina} alt={argentina}/>
          <Cuba src={cuba} alt={cuba}/>
          <RD src={rd} alt={rd}/>
          <PuertoR src={puertorico} alt={puertorico}/>
          <Espana src={espana} alt={espana}/>
        </Map>
      </Holder>
    )
  }

}