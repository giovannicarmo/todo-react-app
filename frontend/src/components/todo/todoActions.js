import axios from "axios";

const URL = 'http://localhost:3003/api/todos';

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
