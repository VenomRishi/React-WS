const redux = require('redux')
const createStore = redux.createStore

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

// redux store 
// 1. holds application state
const store = createStore(reducer)
// 2. allows access to state via getState()
console.log('Initial state', store.getState());
// 4. Register listeners via subscribe (Listener)
// store.subscribe(()=>console.log('Updated state', store.getState()));
// 5. Handles unregistering of Listeners via the function returned by subscriber
 const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()));
// 3. allows state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe()
