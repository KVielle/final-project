import React from "react";
import styled from "styled-components"



const Button = () => {

    return (
        <Wrapper>
            <Picker>
                Pick for me!
            </Picker>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 20em;
    width: 100vw;
    text-align:center;
    
`
const Picker = styled.button`
    font-family: 'League Gothic', sans-serif;
    font-size: 3.5em;
    padding: 0.5em 1em 0.5em 1em;
    border: none;
    border-radius: 30px;
    background-color: #c20211;
    color: white;
    transition-duration: 300ms;
    &:active{
        transform: scale(0.9, 0.9);
        transition-duration: 300ms;
    }
    
`

export default Button;