import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("https://localhost:44313/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPost = (id) => {
    return fetch(`https://localhost:44313/GetPostIdWithComments/${id}`)
    .then((res) => res.json())
  }

  const addPost = (post) => {
    return fetch("https://localhost:44313/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getAllPosts);
  };

  const searchPost = (searchTerm) => {
    return fetch(`https://localhost:44313/api/Post/search?q=${searchTerm}`)
    .then((res) => res.json())
    .then(setPosts);
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPost, getPost }}>
      {props.children}
    </PostContext.Provider>
  );
};