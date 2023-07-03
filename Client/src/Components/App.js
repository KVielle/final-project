import styled from "styled-components"
import GlobalStyles from "./GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom"

import HomePage from "./HomePage/HomePage";
import Profile from "./Profile";
import WishList from "./WishList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />}/>
          <Route path = "/profile" element = {<Profile />}/>
          <Route path = "/signin" element = {<SignIn />}/>
          <Route path = "/signup" element = {<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;