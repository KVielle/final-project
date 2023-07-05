import React, { useContext } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./UserContext";
import Header from "./Header/Header"



const SignIn = () => {
    const navigate = useNavigate();
    const { setName, setCurrentUser } = useContext(UserContext);

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
        password: formData.password,
    };
    const newData = JSON.stringify(data);
    fetch("/signin", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: newData,
    })
        .then((res) => res.json())
        .then((parse) => {
        if (parse.status === 200) {
            window.alert("Signed in Succesfully!");
            window.localStorage.setItem(
            "user",
            JSON.stringify(parse.data.cartId)
            );
            window.localStorage.setItem(
            "name",
            JSON.stringify(parse.data.firstName)
            );
            setName(parse.data.firstName);
            setCurrentUser(parse.data.cartId);
            navigate("/");
        } else if (parse.status === 404){
            window.alert(JSON.stringify(parse.data));
        }
        })
        .catch((error) => {
        window.alert(error);
        });
    }


    return (

        <Wrapper>
            <Header />
            <Box>
                <SignInForm onSubmit={handleSubmit}>
                    <Title>Sign in</Title>
                    <Flex>
                        <FormGroup>
                            <Label htmlFor="email">Email:</Label>
                            <Input
                                type="email"
                                id="email"
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
                    <Signup to="/signup">Already have an account? Sign in now!</Signup>
                    <Button type="submit">Sign In</Button>
                </SignInForm>
        </Box>
    </Wrapper>
    )
};


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
const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
    margin-bottom: 0.6em;
    }
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Title = styled.h2`
    margin-bottom: 1em;
    font-size: 2em;
`
const Label = styled.label`

`
const Input = styled.input`
    margin-left: 1em;
`
const FormGroup = styled.div`

`
const Signup = styled(NavLink)`
    color: white;
    margin-bottom: 1em;
    font-size: 0.8em;
`
const Button = styled.button`

`
export default SignIn;