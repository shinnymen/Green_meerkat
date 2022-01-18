import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Navbar from "../Navbar";
import Match from "../../pages/Match";
import Messages from "../../pages/Messages";
import Practice from "../../pages/Practice";

const Index = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/trending" exact element={<Trending />} />
        <Route path="/match" exact element={<Match />} />
        <Route path="/message" exact element={<Messages />} />
        <Route path="/practice" exact element={<Practice />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default Index;
