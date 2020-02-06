const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
// creating combining reducer
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
// logger
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action"
  };
}

function buyIcecream() {
  return { type: BUY_ICECREAM };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20
// };

const initialCakeState = {
  numOfCakes: 10
};
const initialIcecreamState = {
  numOfIcecreams: 20
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       };

//       break;

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1
//       };

//       break;

//     default:
//       return state;
//       break;
//   }
// };

const cakeReduce = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

      break;

    default:
      return state;
      break;
  }
};
const icecreamReduce = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };
      break;

    default:
      return state;
      break;
  }
};

// combining reduces using react combine reducer

const rootReducer = combineReducers({
  cake: cakeReduce,
  icecream: icecreamReduce
});

// redux store
// 1. holds application state
// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));
// 2. allows access to state via getState()
console.log("Initial state", store.getState());
// 4. Register listeners via subscribe (Listener)
// store.subscribe(()=>console.log('Updated state', store.getState()));
// 5. Handles unregistering of Listeners via the function returned by subscriber
const unsubscribe = store.subscribe(() => {});
// 3. allows state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
