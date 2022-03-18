import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./components/ApplicationViews.js";
import Header from "./components/Header.js";
import { PostProvider } from "./providers/PostProvider";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
            <UserProvider>
              <Header />
              <ApplicationViews />
            </UserProvider>
          </PostProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;