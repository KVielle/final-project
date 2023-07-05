import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { UserContext } from "../UserContext";
import SignOut from "../SignOut"



const DropDown = () => {

    const { setName, setCurrentUser } = useContext(UserContext);
    const [open, setOpen] = useState(false)
    let menuRef = useRef()
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpen(false);
            }
            
        };

        document.addEventListener("mousedown", handler)

        return() => {
            document.removeEventListener("mousedown", handler)
        }
    });


    const handleSignOut = () => {
        setName(null);
        setCurrentUser(null);
        };


    const MenuRender = () => {
        
        const { name, currentUser } = useContext(UserContext);

        if (name && currentUser ) {
        
            return (
                
                <Menu className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul>
                <Item to="/profile">Profile</Item>
                <Item>
                    <SignOut handleSignOut = {handleSignOut} />
                </Item>
            </ul>
                </Menu>
            )
        } else {

            return (
                <Menu className = {`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    <ul>
                        <Item to = "/signup">Sign up!</Item>
                        <Item to = "/signin">Sign in</Item>
                    </ul>
                </Menu>
            )
        }
    }


    return (
        <Wrapper>
            <Container ref = {menuRef}>
                <Trigger onClick = {() => {setOpen(!open)}}>
                    <GiHamburgerMenu size={35}/>
                </Trigger>
                {MenuRender()}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    right: 2em;
    justify-content: center;
    align-items: center;
    margin-left: 17em;
`
const Container = styled.div`

`
const Trigger = styled.div`
    color: white;
    cursor: pointer;
`
const Menu = styled.div`
    position: absolute;
    top: 5em;
    left: 0vw;
    height: 15em;
    width: 99vw;
    background-color: #78000a;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
    transition: 500ms;
    ul{
        display:flex;
        flex-direction: column;
        height: 15em;
        
    }
    &:active {
        opacity: 1;
        visibility: visible;
    }
    &.inactive {
        opacity: 0;
        visibility: hidden;
        transition: 500ms;
    }
`
const Item = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 2.5em;
    margin-top: 1.2em;
    
`
export default DropDown;