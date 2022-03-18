import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import {PostForm} from "./PostForm";
import { PostProvider } from "../providers/PostProvider";
import  PostDetails  from "./PostDetails";
import { UserPosts } from "./UserPosts";
import { Login } from "./Login";
import { Register } from "./Register";
import { UserProvider } from "../providers/UserProvider";

const ApplicationViews = () => {
  return (
    <PostProvider>
      <UserProvider>
        <Routes>
            <Route path="/" exact element={ <PostList />} />
            <Route path="/posts/add" element={ <PostForm />} />
            <Route path="/posts/:id" element={ <PostDetails /> }/>
            <Route path="/users/:id" element={ <UserPosts /> }/>
            <Route path="/login" element={ <Login /> }/>
            <Route path="/register" element={ <Register /> }/>
        </Routes>
       </UserProvider>
    </PostProvider>
  );
};

export default ApplicationViews;