import styled from "styled-components"
import Header from "../Header/Header"
import Button from "./Button"




const HomePage = () => {

    return (
        <Wrapper>
            <Header />
            <Button />
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #4d0208;
    overflow: auto;
`

export default HomePage;