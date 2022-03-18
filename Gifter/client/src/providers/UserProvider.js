import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  const getCurrentUser = () => {
    const currentUser = localStorage.getItem("gifterUser");

    return currentUser;
  };



  const login = (userObject) => {
    return fetch(`https://localhost:44313/api/userprofile/GetByEmail?email=${userObject.email}`)
      .then((r) => r.json())
      .then((userObjFromDB) => {

        localStorage.setItem("gifterUser", JSON.stringify(userObjFromDB));
        setIsLoggedIn(true);
        navigate(`/users/${userObjFromDB.id}`);
      })
  };

  const register = (userObject) => {
    fetch("/api/userprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((response) => response.json())
      .then((userObject) => {
        localStorage.setItem("gifterUser", JSON.stringify(userObject));
      });
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{ getCurrentUser, login, register, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
