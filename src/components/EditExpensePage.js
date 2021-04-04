import { connect } from "react-redux";
import ExpensForm from "./ExpenseForm";

import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  //   console.log(props); // if the mapStateToProps, this should log the expense we got from the store
  //on the console
  return (
    <div>
      <ExpensForm
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action the editExpense
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

// We want to give the component the current expense object. Everything we doing bellow is
// to pass the component we want to edit to EditExpensePage

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(EditExpensePage);
