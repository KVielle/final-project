import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "./Header/Header"


const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleChange = (key, value) => {
    setFormData({
        ...formData,
        [key]: value,
    });
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        email: formData.email,
        firstName: formData.firstName,
        password: formData.password,
    };
    const newData = JSON.stringify(data);
    fetch("/signup", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: newData,
    })
        .then((res) => res.json())
        .then((parse) => {
        if (parse.status === 201) {
            window.alert("Account Created Succesfully!");
            navigate("/");
        }
        })
        .catch((error) => {
        window.alert(error);
        });
    };


    return (
        <Wrapper>
            <Header />
            <Box>
                <SignUpForm onSubmit={handleSubmit}>
                    <Title>Sign up</Title>
                    <Flex>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input
                                type="email"
                                id="email"
                                onChange={(event) =>
                                    handleChange(event.target.id, event.target.value)
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>First Name:</Label>
                            <Input
                                type="text"
                                id="firstName"
                                onChange={(event) =>
                                    handleChange(event.target.id, event.target.value)
                                }
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password:</Label>
                            <Input
                                type="password"
                                id="password"
                                onChange={(event) =>
                                    handleChange(event.target.id, event.target.value)
                                }
                            />
                        </FormGroup>
                    </Flex>
                    <SignIn to="/signin">Already have an account? Sign in now!</SignIn>
                    <Button type="submit">Sign up!</Button>
                </SignUpForm>
            </Box>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    background-color: #4d0208;
    height: 100vh;
    font-family: 'League Gothic', sans-serif;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    color: white;
    margin-top: 45%;
`
const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
    margin-bottom: 0.6em;
    }
`
const Title = styled.h2`
    margin-bottom: 1em;
    font-size: 2em;
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Label = styled.label`

`
const Input = styled.input`
    margin-left: 1em;
`
const FormGroup = styled.div`

`
const SignIn = styled(NavLink)`
    color: white;
    margin-bottom: 1em;
    font-size: 0.8em;
`
const Button = styled.button`

`
export default SignUp;