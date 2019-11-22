const INITIAL_STATE = { description: "", list: [] };

export default (state = INITIAL_STATE, action) => {
  if (action.type === "DESCRIPTION_CHANGED")
    return { ...state, description: action.payload };
  if (action.type === "TODO_SEARCHED")
    return { ...state, list: action.payload.data };
  if (action.type === "DESCRIPTION_CLEARED")
    return { ...state, description: "" };
  else return state;
};
