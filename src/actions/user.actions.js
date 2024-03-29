import axios from "axios";

import config from "../config";
import { GET_USERS } from "./users.actions";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const GET_USER_ERRORS = "GET_USER_ERRORS";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${config.backend.host}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${config.backend.host}api/user/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: "" });
          return axios
            .get(`${config.backend.host}api/user/${id}`)
            .then((res) => {
              dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
            });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${config.backend.host}api/user/` + userId,
      data: { bio },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${config.backend.host}api/user/follow/` + followerId,
      data: { idToFollow },
    })
      .then((res) => {
        dispatch({
          type: FOLLOW_USER,
          payload: { idToFollow },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const unfollowUser = (followerId, idToUnFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${config.backend.host}api/user/unfollow/` + followerId,
      data: { idToUnFollow },
    })
      .then((res) => {
        dispatch({
          type: UNFOLLOW_USER,
          payload: { idToUnFollow },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const inviteUserToPlay = (userId) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${config.backend.host}api/user/` + userId,
      data: { userId },
    })
      .then((res) => {
        dispatch({
          type: GET_USERS,
          payload: { userId },
        });
      })
      .catch((err) => console.log(err));
  };
};
