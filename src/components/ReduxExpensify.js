import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import uuid  from 'uuid'

class ReduxExpensify extends Component {
    
    render() {

        // ACTION GENERATORS 

        // ADD EXPENSE
        const addExpense = ({description = '', note = '', amount = 0, createdAt = 0 } = {} ) =>({
           type: "ADD_EXPENSE",
           expense : {
               id: uuid(),
               description,
               note,
               amount,
               createdAt
           }
        });

        // REMOVE EXPENSE
        const removeExpense = ({id} = {}) =>({
            type: "REMOVE_EXPENSE",
            id
        })
        // EDIT EXPENSE
        const editExpense = (id, updates) =>({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        // SET_TEXT_FILTER
        const setTextFilter = (text = '') =>({
            type: "SET_TEXT_FILTER",
            text
        });
         // SORT_BY_DATE
         const sortByDate = () =>({
            type: "SORT_BY_DATE",

         });
         // SORT_BY_AMOUNT
         const sortByAmount = () =>({
            type: "SORT_BY_AMOUNT",

         });
        // SET_START_DATE
        const setStartDate = (startDate) =>({
            type: "SET_START_DATE",
            startDate
        });
        // SET_END_DATE
        const setEndDate = (endDate) =>({
            type: "SET_END_DATE",
            endDate
        });

        // Expenses reducers
        const expensesReducerDefaultState = [];

        // Whenever we dispatch an action, the data we dispatched is available in the action. in this case expense is available in the action
        const expensesReducer = (state = expensesReducerDefaultState, action) => {

            switch(action.type){  
                case 'ADD_EXPENSE':
                    return [
                        ...state, 
                        action.expense // Remember here when we dispatch the expense, it is stored in 
                        // this action, which is why we are able to access from here 
                    ];
                case 'REMOVE_EXPENSE':
                    return state.filter(({id})=>{ // destructuring 
                        return id !== action.id; // true
                    })
                case 'EDIT_EXPENSE':
                    return state.map((expense)=>{
                        if(expense.id === action.id){
                            return {
                                ...expense,
                                ...action.updates // Here remember that action can contain description, amount, notice, created_at that is
                                // why we are spreading it like the way we did here 
                            }
                        }else{
                            return expense;
                        }
                    });
                default:
                    return state;
            }
        }

        // Filters reducer
        const filtersReducerDefaultState = {
            text: "",
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        };

        const filtersReducer = (state = filtersReducerDefaultState, action) => {
            switch(action.type){
                case "SET_TEXT_FILTER":
                    return {
                        ...state, 
                        text: action.text 
                    };

                case "SORT_BY_AMOUNT":
                    return {
                        ...state,
                        sortBy: 'amount'
                    };

                case "SORT_BY_DATE":
                    return {
                        ...state,
                        sortBy: 'date'
                    };

                case "SET_START_DATE":
                    return {
                        ...state,
                        startDate: action.startDate
                    };
                case "SET_END_DATE":
                    return {
                        ...state,
                        endDate: action.endDate
                    };

                default:
                    return state;
            }
        }

        // getVisibleExpenses 
        const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
            return expenses.filter((expense) =>{
                const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
                const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
                const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

                return startDateMatch && endDateMatch && textMatch; // If all the 3 are true, the filter function
                // will return true and the item will be kept in the array 
            }).sort((a,b)=>{
                if(sortBy === "date"){
                    return a.createdAt < b.createdAt ? 1: -1;
                }

                if(sortBy === "amount"){
                    return a.amount < b.amount ? 1: -1;
                }
            })
        };
        // Creating a new store
        // When creating a store, we pass it one reducer but in this case we have multiple reducers so we
        // use combineReducers
        
        const store = createStore(
                combineReducers({
                    expenses: expensesReducer,
                    filters: filtersReducer
                })
            );

        store.subscribe(()=>{
            const state = store.getState();
            const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
            // console.log(visibleExpenses);

            console.log(store.getState());
        });

        const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 3000, createdAt:-21000}));
        const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 6000, createdAt:-1000}));
        const expenseThree = store.dispatch(addExpense({description: 'Chicken', amount: 90000, createdAt:10000}));

        store.dispatch(editExpense(expenseThree.expense.id, {description: "Chicken Salad", amount: 1500}));

        store.dispatch(removeExpense({id: expenseOne.expense.id}));

        // store.dispatch(editExpense(expenseOne.expense.id, {description: "Rent2", amount: 1500}));
        // store.dispatch(setTextFilter('laundry'));
        // store.dispatch(setTextFilter());
        // store.dispatch(sortByAmount());
        // store.dispatch(sortByDate());

        // store.dispatch(setStartDate(1000025));
        // // store.dispatch(setStartDate());
        // store.dispatch(setEndDate(1259));  

        // console.log(expenseOne);
        // console.log(expenseTwo);

        const demoState = {
            expenses: [{
                id: '1',
                description: 'January Rent',
                note: 'This was the final payment for that address',
                amount: 54500,
                createdAt: 0
            }],
            filters:{
                text: 'rent',
                sortBy: 'amount', // date or amount
                startDate: undefined,
                endDate: undefined
            }
        }
        
        return (
            <div>
                
            </div>
        )
    }
}
export default ReduxExpensify;