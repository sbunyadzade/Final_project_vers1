const defaultValue = {
  opType: 0,
  opQuery: ''
};

const coinReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "SET_QUERY": {
      // console.log(action.payload.opQuery);
      return {
        ...state,
        opType: action.payload.opType,
        opQuery: action.payload.opQuery
      };
    }
      default:
        return state;
  }
};

export default coinReducer;
