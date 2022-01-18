import React from "react";
import Leftnav from "../components/LeftNav";
import MatchPlay from "../components/Profil/MatchPlay";
import NextMatch from "../components/Profil/NextMatch";

const Match = () => {
  return (
    <div className="profil-page">
    <Leftnav />
      <h1>MATCH</h1>
      <div className="update-container">
        <div className="left-part">
          <h2>Organiser</h2>
          <br />
          <MatchPlay />
        </div>
        <div className="right-part">
          <div className="bio-update">
          <h3>Vos Invitations</h3>
          
            <NextMatch />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
