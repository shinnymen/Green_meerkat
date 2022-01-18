import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import config from '../../config'

const Logout = () => {
  const logout = async () => {
    await axios({
      method: "get",
      url: `${config.backend.host}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        localStorage.removeItem('token')
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;
