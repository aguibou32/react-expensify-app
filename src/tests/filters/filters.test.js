import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

import moment from "moment";

// With default
test("Should set up setTextFilter object with default ", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

// With parametter text
test("Should set up setTextFilter", () => {
  const text = "something in";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: text,
  });
});

test("should set up sortByAmount filter", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should set up sortByDate filter", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should set up setStartDate filter", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should set up setEndDate filter", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});
