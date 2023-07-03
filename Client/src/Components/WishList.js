import styled from "styled-components"



const WishList = () => {

    return (
        <Wrapper>
            <Title>WishList</Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    width: 100vw;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Title = styled.div`
    color: white;
    font-family: 'League Gothic', sans-serif;
    font-size: 2.2em;
    border-bottom: solid 0.5em #78000a;
`
export default WishList;