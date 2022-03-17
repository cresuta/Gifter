import React, {useContext, useEffect, useState} from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [imageurl, setImageurl] = useState("");

    
}