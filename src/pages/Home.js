import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Leftnav from "../components/LeftNav";
import Newpostform from "../components/Post/NewPostForm";
import Thread from "../components/Thread";
import Log from "../components/Log";
import Trends from "../components/Trends";

const Homes = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <Leftnav />
      <div className="main">
        <div className="home-header">
          {uid ? <Newpostform /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homes;
