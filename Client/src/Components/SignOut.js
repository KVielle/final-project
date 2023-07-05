import React from "react";

const SignOut = () => {
    const handleClearLocalStorage = () => {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("name");
    };

    return (
        <button onClick={handleClearLocalStorage}>
            Sign Out
        </button>
    );
};

export default SignOut;