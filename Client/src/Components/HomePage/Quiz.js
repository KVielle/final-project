import styled from "styled-components"

const Quiz = () => {

    return (
        <Wrapper>
            <Form>
                <Flex>
                    <Group>
                        <Label>What genre do you like?</Label>
                        <Input />
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
const Group2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    align-items: left;
`

export default Quiz;