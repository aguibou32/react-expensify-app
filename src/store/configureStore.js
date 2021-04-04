import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // This is to see the store show in the browser
  );

  return store;
};

// const demoState = {
//   expenses: [
//     {
//       id: "1",
//       description: "January Rent",
//       note: "This was the final payment for January Rent",
//       amount: 14000,
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", // It can also be date,
//     startDate: 0,
//     endDate: 0,
//   },
// };
