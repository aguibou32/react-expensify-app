// import logo from "./logo.svg";
import "./App.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
// import { setTextFilter, sortByDate, sortByAmount } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";

// import HigherOrderComponents from "./components/HighOrderComponents";

// import PlayGround from "./components/PlayGround";
// import ReduxExpensify from './components/ReduxExpensify';

// To use react
import { Provider } from "react-redux"; // This is from react-redux
// It will help us pass the store we created down to all our components

function App() {
  const store = configureStore(); // Down we passing it as props to the AppRouter

  // store.dispatch(
  //   addExpense({ description: "Water Bill", amount: 4500, createdAt: 3 })
  // );
  // store.dispatch(
  //   addExpense({ description: "Gas Bill", amount: 5000, createdAt: 2 })
  // );
  // store.dispatch(
  //   addExpense({ description: "Rent", amount: 10950, createdAt: 100 })
  // );

  // store.dispatch(setTextFilter('sd'));
  // store.dispatch(setTextFilter('phone'));

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

  return <div className="App">{jsx}</div>;
}

export default App;
