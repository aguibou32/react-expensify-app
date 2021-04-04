import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up removeExpense action object", () => {
  const action = removeExpense({ id: "123abc" }); // Here we are expecting it to be called with an object that has the id property

  expect(action).toEqual({
    // When the action object is called, we are expecting to get back the following object
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should set up editExpense action generator", () => {
  const action = editExpense("123abc", {
    note: "new note value",
    amount: 5000,
  }); // const action gets its value from whatever comes back from editExpense call

  expect(action).toEqual({
    // on the add suite, we used toBe, we cannot used toBe for object, we have to use toEqual
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note value",
      amount: 5000,
    },
  });
});

// test with provided values
test("should set up addExpense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 5000,
    createdAt: 10000,
    note: "This was last month rent",
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});

// The following test is when we rely on the default
test("should set up the addExpense object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
