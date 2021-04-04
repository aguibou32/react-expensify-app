const expensesReducerDefaultState = []; // We have set this to an empty array because we have multiple
// expenses we need to store in the array, each expense is an object as well because we need to store
// multiple things about each expense;

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;

// const demoState = {
//     expenses:[{
//         id:'1',
//         description: 'January Rent',
//         note: 'This was the final payment for January Rent',
//         amount: 14000,
//         createdAt: 0
//     }],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount', // It can also be date,
//         startDate: 0,
//         endDate: 0
//     }
// }
