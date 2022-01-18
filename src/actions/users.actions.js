import axios from "axios";

import config from '../config'


export const GET_USERS = "GET_USERS";

export const getUsers = (search) => {
  return (dispatch) => {
    return axios
      .get(`${config.backend.host}api/user`, { params: { search }})
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
