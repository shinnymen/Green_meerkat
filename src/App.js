import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";
import config from "./config";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${config.backend.host}jwtid`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setUid(res.data);
        })

        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [dispatch, uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
