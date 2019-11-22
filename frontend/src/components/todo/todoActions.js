import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = e => ({
  type: "DESCRIPTION_CHANGED",
  payload: e.target.value
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-created`);
  return {
    type: "TODO_SEARCHED",
    payload: request
  };
};

export const clear = () => ({
  type: "DESCRIPTION_CLEARED"
});

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(response => dispatch(clear()))
      .then(response => dispatch(search()));
  };
};

export const remove = id => {
  return dispatch => {
    axios.delete(`${URL}/${id}`).then(response => dispatch(search()));
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(response => dispatch(search()));
  };
};

export const markAsPending = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(response => dispatch(search()));
  };
};
