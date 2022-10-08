const initialState = {
  summaries: [],
};

export function updateSummaries(summaries) {
  return {
    type: "updateSummaries",
    payload: summaries,
  };
}

function summaryReducer(state = initialState, action) {
  switch (action.type) {
    case "updateSummaries":
      return {
        ...state,
        summaries: action.payload,
      };
    default:
      return state;
  }
}

export default summaryReducer;
