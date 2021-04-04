import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Expensify</h1>
                
                    <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard Page</NavLink>
                    <NavLink to="/create" activeClassName="isActive">Add Expense</NavLink>
                    <NavLink to="/edit" activeClassName="isActive" >Edit Expense</NavLink>
                    <NavLink to="/help" activeClassName="isActive" >Help</NavLink>
                
                    {/* NavLink is the same as Link, the major difference is NavLink is more adapted to Navbar, and we can customise
                    it in a way that we know on which page we are */}
                    {/* <Link to="/">Dashboard Page</Link>
                    <Link to="/create">Add Expense</Link>
                    <Link to="/edit">Edit Expense</Link>
                    <Link to="/help">Help</Link> */}
                </header>
            </div>
        )
    }
}
