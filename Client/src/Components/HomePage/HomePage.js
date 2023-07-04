import styled from "styled-components"
import Header from "../Header/Header"
import Button from "./Button"
import Quiz from "./Quiz"
// import Result from "./Result"



const HomePage = () => {

    return (
        <Wrapper>
            <Header />
            <Quiz />
            <Button />
            {/* <Result /> */}
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