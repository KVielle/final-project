import styled from "styled-components"
import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";



const Quiz = () => {

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


    fetch(`/genres`)




    return (
        <Wrapper>
            <Form>
                <Flex>
                    <Group ref = {menuRef}>
                        <Label>What genre do you like?</Label>
                        <Trigger onClick = {() => {setOpen(!open)}}>
                            <AiOutlineArrowDown size= {30}/>
                        </Trigger>
                        <Menu className = {`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                            <Item>yo</Item>
                            <Item>yo</Item>
                            <Item>yo</Item>
                            <Item>sup</Item>
                            <Item>yo</Item>
                            <Item>yo</Item>
                            <Item>yo</Item>
                            <Item>yo</Item>
                        </Menu>
                    </Group>
                    <Group2>
                        <Label>How long do you have?</Label>
                        <Label2>
                        <Input
                            type = "checkbox"
                        />Time for a movie</Label2>
                        <Label2>
                        <Input
                            type = "checkbox"
                        />Time for a show</Label2>
                    </Group2>
                </Flex>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    font-family: 'League Gothic', sans-serif;
`
const Form = styled.form`
    color: white;
    font-size: 2em;
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;
const Label = styled.label`
    text-align: center;
`
const Label2 = styled.label`
    text-align: center;
    font-size: 0.8em;
`
const Input = styled.input`
    margin-top: 0.5em;
`
const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    align-items: center;
`
const Trigger = styled.div`
    color: white;
    cursor: pointer;
    margin-top: 0.5em;
    transition: transform 0.3s; /* Added transition property */
    
`
const Menu = styled.div`
    position: absolute;
    top: 6em;
    background-color: #78000a;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
    width: 99vw;
    z-index: 10;
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
const Item = styled.div`

`
const Group2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5em;
    align-items: left;
`

export default Quiz;