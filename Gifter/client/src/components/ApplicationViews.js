import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import {PostForm} from "./PostForm";
import { PostProvider } from "../providers/PostProvider";
import  PostDetails  from "./PostDetails";
import { UserPosts } from "./UserPosts";

const ApplicationViews = () => {
  return (
    <PostProvider>
        <Routes>
            <Route path="/" exact element={ <PostList />} />
            <Route path="/posts/add" element={ <PostForm />} />
            <Route path="/posts/:id" element={ <PostDetails /> }/>
            <Route path="/users/:id" element={ <UserPosts /> }/>
        </Routes>
    </PostProvider>
  );
};

export default ApplicationViews;