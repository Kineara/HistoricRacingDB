const initialState = {
  user: "test",
  username: "",

};

export function setUser(user) {
  return {
    type: "setUser",
    payload: user,
  };
}

export function updateUsername(username) {
  return {
    type: "updateUsername",
    payload: username,
  };
}

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
      };
    case "updateUsername":
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state;
  }
}

export default accountReducer;