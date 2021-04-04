import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";

// the reason we are able to access {description, amount, createdAt} is because when we passed it
// in the ExpenseList, we used the spread operator

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem; // We do not need data from the state, reason we are not passing anything to connect()
