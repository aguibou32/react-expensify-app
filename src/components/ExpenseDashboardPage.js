import React, { Component } from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export default class ExpenseDashboardPage extends Component {
    render() {
        return (
            <div>
                This is from my Dashboard Component 
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        )
    }
}
