import React from "react";
import "./index.css";
// import Login from "./Login";
import UserProfile from "./UserProfile";

function Auth() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
                {/* <Login /> */}
                <UserProfile />
            </header>
        </div>
    );
}

export default Auth;
