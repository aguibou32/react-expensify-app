import React, { Component } from "react";
import { createStore } from "redux";

export default class PlayGround extends Component {
  render() {
    // Action Generators - functions that return action objects
    // A reducer determines what the function does based of an action
    // 1. Reducers are pure functions (Does not change a value from the outside the scope of the function and does not use a variable outside the scope of the function)
    // 2. Example of what a reducer is not. The following functions are interracting with variables outside
    // its scope which means they are not pure functions and therefore cannot be reducers

    // let a = 10;
    // const add = (b) =>{
    //     return a + b;
    // }

    // let result = 0;
    // const add2 = (a,b)=>{
    //     result = a + b;
    // }

    const incrementCount = ({ incrementBy = 1 } = {}) => ({
      type: "INCREMENT",
      incrementBy: typeof incrementBy === "number" ? incrementBy : 1,
    });

    const decrementCount = ({ decrementBy = 1 } = {}) => ({
      type: "DECREMENT",
      decrementBy: typeof decrementBy === "number" ? decrementBy : 1,
    });

    const setCount = ({ count }) => ({
      type: "SET",
      count,
    });

    const resetCount = () => ({
      type: "RESET",
    });

    // Reducers

    const countReducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case "INCREMENT":
          return {
            count: state.count + action.incrementBy,
          };
        case "DECREMENT":
          return {
            count: state.count - action.decrementBy,
          };
        case "RESET":
          return {
            count: 0,
          };
        case "SET":
          return {
            count: action.count,
          };
        default:
          return state;
      }
    };

    const store = createStore(countReducer);

    console.log(store.getState());

    // This object bellow here is called an action; an action is sent to the store using a dispatch, and then the
    // the store does something with the action

    const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
    });

    // store.dispatch({
    //     type:'INCREMENT',
    //     incrementBy: 5
    // }); // Dispatch allows us to send an action to the store

    store.dispatch(incrementCount({ incrementBy: 10 }));
    store.dispatch(incrementCount({ incrementBy: 10 }));
    store.dispatch(incrementCount({ incrementBy: 10 }));
    store.dispatch(incrementCount({ incrementBy: 10 }));
    store.dispatch(incrementCount({ incrementBy: 10 }));

    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));
    store.dispatch(decrementCount({ decrementBy: 10 }));

    store.dispatch(resetCount());

    store.dispatch(setCount({ count: 100030 }));

    // store.dispatch({
    //     type: "RESET"
    // });

    // store.dispatch({
    //     type: 'SET',
    //     count: 101
    // });

    console.log(store.getState());

    return <div></div>;
  }
}
