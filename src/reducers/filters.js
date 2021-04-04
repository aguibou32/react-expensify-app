import moment from "moment";

// Filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"), // the current moment in time when the code runs
  endDate: moment().endOf("month"),
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filtersReducer;

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
