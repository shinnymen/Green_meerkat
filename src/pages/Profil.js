import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import Updateprofil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <Updateprofil/>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container" >
            <img src="./img/meerkat.png" style={{height:"450px"}}  alt="log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
