import actionTypes from "./actionTypes";

export const setJob = (payload) => {
  return {
    type: actionTypes.SET_JOB,
    payload,
  };
};
let idNext = 0;
export const addJob = (content, status) => {
  if (!content) {
    return;
  }
  const payload = {
    id: ++idNext,
    title: content,
    status: status,
    isEditing: false,
  };
  return {
    type: actionTypes.ADD_JOB,
    payload,
  };
};

export const deleteJob = (payload) => {
  return {
    type: actionTypes.DELETE_JOB,
    payload,
  };
};

export const updateJob = (payload, title) => {
  return {
    type: actionTypes.UPDATE_JOB,
    payload,
    title,
  };
};

export const setIsEditing = (payload) => {
  return {
    type: actionTypes.SET_IS_EDITING,
    payload
  };
};
