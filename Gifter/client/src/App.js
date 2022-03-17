import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews.js";
import Header from "./components/Header.js";
import { PostProvider } from "./providers/PostProvider";
import { UserProfileProvider } from "./providers/UserProfileProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
          <Header />
          <ApplicationViews />
          </PostProvider>
          </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;