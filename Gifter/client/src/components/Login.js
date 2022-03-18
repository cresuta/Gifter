import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../providers/UserProvider";

export const Login = () => {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const {login} = useContext(UserContext);

    const submitLoginForm = (e) => {
        e.preventDefault();
        login({email});
    }

    return (
        <>
            <h2>Log In</h2>
            <form>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="email"
                />
                {/* <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="password"
                /> */}
                <button type="submit" onClick={submitLoginForm}>
                    Log In
                </button>
            </form>
        </>
    )
}