import moment from "moment";

// getVisibleExpenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch; // If all the 3 are true, the filter function
      // will return true and the item will be kept in the array
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }

      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
