import { symbol } from "prop-types";
import React, { useState } from "react";
import {Button, TouchableOpacity} from "react-native";
import styled from "styled-components"; 
import constants from "../../../constants";
import { makeToggleArr } from "../../../utils";

const Wrapper=  styled.View`
    max-width:${constants.width/2}; 
    background-color:${props=>props.state?"#000":"#fff"};
    padding:7px 20px;
    border-radius:20px;
    margin-right:5px;
    margin-top:7px;
    border:1px solid #000;
`;


const Text = styled.Text`
    color:${props=>props.state?"#fff":"#000"};
    text-align:center;
    font-size:16px;
    /* font-weight:bold; */
`; 


const RightFilterButton=({text,setting,toggle,index})=>{
    return (
        <Wrapper state={toggle}>
        <TouchableOpacity onPress={()=>{
            if(toggle===1){
                setting(makeToggleArr(false,index,5));
            }
            else{
                setting(makeToggleArr(true,index,5));
            }
        }}>
                <Text state={toggle}>{text}</Text>
        </TouchableOpacity>
            </Wrapper>
    );
}

export default RightFilterButton;