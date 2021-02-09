//<button bool={bool} onClick={() => setBool(!bool)}>toggle</button>

import styled from "styled-components";
import {SwitchContext} from './Context';
import {useContext} from 'react';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#436e43;
    -webkit-transition: .4s;
    transition: .4s;
    :before {
      border-radius: 50%;
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${({bool}) => !bool ? '#FEF3F8' : '#353238'};
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
  input:checked + span {
  background-color: #F0FCFF;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const ToggleSwitch = () => {
  const {bool, setBool} = useContext(SwitchContext);

  const toggler = () => {
    bool ? setBool(!bool) : setBool(bool);
  }
  if (bool){}
  console.log("switch bool:" + bool);
  console.log('switch setbool' + setBool);
    return ( 
      <Switch bool={bool}>
        <input defaultChecked={bool} onClick={() => setBool(!bool)} type="checkbox"/>
        <span></span>
      </Switch>
     );
};

export default ToggleSwitch;