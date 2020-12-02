import React, { Component } from 'react'
import "./App.css"

export default class TodoItem extends Component {
    render() {
        var todolist = this.props.todos.map((todo) =>
            // <li key={todo.id}>{todo.title}</li>
            
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
            </tr>

        )
        return (
            <div>
                <table id="customers">
                    <tr>
                        <th>S.N</th>
                        <th>title</th>
                        <th>status</th>
                    </tr>
                    {todolist}
                </table>

                {/*}  <ul>

                {todolist}
                </ul>*/}
            </div>
        )
    }
}
