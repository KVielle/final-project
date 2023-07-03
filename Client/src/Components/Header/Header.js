import React from "react";
import styled from "styled-components"
import myLogo from "../../Assets/S.png"
import DropDown from "./DropDown";



const Header = () => {

    return (
        <Wrapper>
            <Logo src = {myLogo} alt = "Logo"/>
            <Title>Shuffle</Title>
            <DropDown />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 5em;
    justify-content: center;
    align-items: center;
    background-color: #78000a;
    font-family: 'League Gothic', sans-serif;
    
`
const Logo = styled.img`
    width: 4em;
    margin-right: 3em;
    position: absolute;
    left: 1em;
`
const Title = styled.div`
    position: absolute;
    color: white;
    font-size: 3em;
`

export default Header;