import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class Todos extends Component {
    render() {
      /*   var TodoItems=this.props.todos.map((todo)=>{
            return(
                <TodoItem key={todo.title} todo={todo}/>
            )
        })*/
        return (
            <div>
            <h3>Todo List</h3>
               <TodoItem todos={this.props.todos}/>
            </div>
        )
    }
}
