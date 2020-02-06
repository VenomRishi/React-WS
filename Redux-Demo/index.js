const BUY_CAKE = "BUY_CAKE";

// action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action"
  };
}

const initialState = {
  numOfCakes: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

      break;

    default: return state
      break;
  }
};
