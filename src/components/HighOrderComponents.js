import React, { Component } from 'react'

export default class HighOrderComponents extends Component {
    render(props) {
        return (
            <div>
                <h1>{props}</h1>
            </div>
        )
    }
}
